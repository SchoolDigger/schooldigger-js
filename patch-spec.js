// patch-spec.js
// Patches the OpenAPI spec for cleaner SDK generation
const fs = require('fs');

const [, , inputPath, outputPath] = process.argv;
if (!inputPath || !outputPath) {
  console.error('Usage: node patch-spec.js <input.json> <output.json>');
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

// 1. Clean up operation IDs
const operationIdMap = {
  'Autocomplete_GetSchools23': 'autocompleteSchools',
  'Autocomplete_GetDistricts23': 'autocompleteDistricts',
  'Districts_GetAllDistricts21': 'searchDistricts',
  'Districts_GetAllDistricts24': 'searchDistricts',
  'Districts_GetDistrict21': 'getDistrict',
  'Districts_GetDistrict30': 'getDistrict',
  'Schools_GetAllSchools22': 'searchSchools',
  'Schools_GetAllSchools24': 'searchSchools',
  'Schools_GetSchool22': 'getSchool',
  'Schools_GetSchool30': 'getSchool',
  'Rankings_GetSchoolRank21': 'getSchoolRankings',
  'Rankings_GetRank_District': 'getDistrictRankings',
  'Rankings_GetDistrictRank21': 'getDistrictRankings',
};

for (const [path, methods] of Object.entries(spec.paths || {})) {
  for (const [method, operation] of Object.entries(methods)) {
    if (typeof operation !== 'object' || !operation.operationId) continue;

    // Rename operation ID
    if (operationIdMap[operation.operationId]) {
      operation.operationId = operationIdMap[operation.operationId];
    }

    // Remove appID and appKey from per-endpoint parameters
    // (they'll be handled by the security scheme instead)
    if (Array.isArray(operation.parameters)) {
      operation.parameters = operation.parameters.filter(
        p => p.name !== 'appID' && p.name !== 'appKey'
      );
    }
  }
}

// 2. Add security schemes
if (!spec.components) spec.components = {};
spec.components.securitySchemes = {
  appID: { type: 'apiKey', in: 'query', name: 'appID' },
  appKey: { type: 'apiKey', in: 'query', name: 'appKey' }
};
spec.security = [{ appID: [], appKey: [] }];

// 3. Set metadata
spec.info.title = 'SchoolDigger API';
spec.info.description = 'K-12 school and district data for 120,000+ U.S. schools';
spec.info.contact = {
  name: 'SchoolDigger API Support',
  email: 'api@schooldigger.com',
  url: 'https://developer.schooldigger.com'
};

// 4. API 3.0 unions. The API is documented with Swagger 2.0 (no oneOf), so the server records
//    "number OR APIReportedPercent" on the six test-score percent metrics as the vendor extension
//    x-schooldigger-oneOf (see api.schooldigger.com/App_Start/SwaggerReportedPercentSchemaFilter.vb).
//    swagger2openapi keeps the extension; turn it into a real oneOf so the generators emit a union type.
const UNION_EXT = 'x-schooldigger-oneOf';
let unions = 0;
for (const [name, schema] of Object.entries((spec.components && spec.components.schemas) || {})) {
  for (const [propName, prop] of Object.entries(schema.properties || {})) {
    if (!prop || !Array.isArray(prop[UNION_EXT])) continue;
    const alternatives = prop[UNION_EXT].map(alt => {
      // swagger2openapi rewrites #/definitions/ refs only where it knows to look; vendor
      // extensions are opaque to it, so fix the ref here.
      if (alt.$ref) return { $ref: alt.$ref.replace('#/definitions/', '#/components/schemas/') };
      return alt;
    });
    delete prop[UNION_EXT];
    delete prop.type;
    delete prop.format;
    prop.oneOf = alternatives;
    unions++;
  }
}
if (unions) console.log(`Converted ${unions} ${UNION_EXT} properties to oneOf`);

fs.writeFileSync(outputPath, JSON.stringify(spec, null, 2));
console.log(`Patched spec written to ${outputPath}`);
