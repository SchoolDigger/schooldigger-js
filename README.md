# SchoolDigger JavaScript/TypeScript SDK

Official Node.js client for the [SchoolDigger API](https://developer.schooldigger.com) — K-12 school data for 120,000+ U.S. schools.

## Installation

```bash
npm install schooldigger
```

## Quick Start

```typescript
import { Configuration, SchoolsApi } from 'schooldigger';

const config = new Configuration({
  apiKey: (name) => {
    if (name === 'appID') return 'YOUR_APP_ID';
    if (name === 'appKey') return 'YOUR_APP_KEY';
    return '';
  },
});

const api = new SchoolsApi(config);

// Search schools in Washington state
const result = await api.searchSchools({ st: 'WA', q: 'Lincoln' });
for (const school of result.schoolList) {
  console.log(`${school.schoolName} — ${school.address.city}, ${school.address.state}`);
}

// Get a specific school by SchoolDigger ID
const detail = await api.getSchool({ id: '530966001632' });
console.log(`Enrollment: ${detail.schoolYearlyDetails[0].numberOfStudents}`);
```

## API Classes

| Class | Methods |
|-------|---------|
| `SchoolsApi` | `searchSchools()`, `getSchool()` |
| `DistrictsApi` | `searchDistricts()`, `getDistrict()` |
| `RankingsApi` | `getSchoolRankings()`, `getDistrictRankings()` |
| `AutocompleteApi` | `autocompleteSchools()`, `autocompleteDistricts()` |
| `BatchClient` | `submitBatch()`, `getBatch()`, `getBatchResults()`, `waitForBatch()`, `cancelBatch()` (see [Batch requests](#batch-requests-sdk-32)) |

## Test scores in API 3.0

Pass `includeRanges: true` to `getSchool` / `getDistrict` (without it, test scores are as
in API 2.4). Each test-score percent
(`percentMetStandard`, `percentTier1` ... `percentTier5`) is **either a `number` or an
`APIReportedPercent` object** (`status` of `range`, `suppressed`, `legacyImputed` or `derived`,
with optional `value`, `low`, `high`), and is `undefined` when the state reported nothing:

```typescript
const school = await api.getSchool({ id: '330004800609', includeRanges: true });
for (const ts of school.testScores ?? []) {
  const v = ts.schoolTestScore?.percentMetStandard;
  let text: string;
  if (v === undefined) text = 'not reported';
  else if (typeof v === 'number') text = `${v}%`;
  else if (v.status === 'suppressed') text = 'suppressed by the state';
  else if (v.low !== undefined && v.low <= 0) text = `< ${v.high}%`;
  else if (v.high !== undefined && v.high >= 100) text = `>= ${v.low}%`;
  else if (v.low !== undefined) text = `${v.low}-${v.high}%`;
  else text = `${v.value}%`;
  console.log(ts.year, ts.grade, ts.subject, text);
}
```

See [Data Quality and Suppression](https://developer.schooldigger.com/data-quality) for the full
vocabulary and rendering rule. API 2.4 and below (SDK 1.x) return only exact values.

## Low-income measure in API 3.1

SDK 3.0 targets API 3.1. School records from `getSchool`, `searchSchools` and
`getSchoolRankings` carry `lowIncome`: the school's one low-income measure, `type` `"FRL"`
(free/reduced-price lunch eligible), `"DC"` (directly certified for free meals; used where the
school reports no usable free/reduced count) or `"CEP"` (likely serves free meals to all
students under the Community Eligibility Provision; no `percent`), with `year`, `percent`,
`count`, `enrollment`, `communityEligibilityLikely` and `statewideFreeMeals`. It is
`undefined` when the school has no usable value. FRL and DC are not comparable: don't sort one
against the other.

```ts
const school = await api.getSchool({ id: '250309000385' });
const li = school.lowIncome;
const sy = (y: number) => `${y - 1}-${String(y % 100).padStart(2, '0')}`;
if (!li) console.log('no low-income figure');
else if (li.type === 'CEP') console.log(`All students receive free meals (Community Eligibility, ${sy(li.year!)})`);
else console.log(`${li.type === 'FRL' ? 'Free/reduced lunch eligible' : 'Directly certified for free meals'}: ${li.percent}% (${sy(li.year!)})`);
```

Each yearly detail has `freeReducedLunch` (count and percent, or a `status` of
`communityEligibility`, `repeated` or `aboveEnrollment`) and `directCertification`. SDK 3.0
renames the school models for API 3.1, a breaking change for code that imports them by name (`APISchoolFull31Ranges`, `APISchoolList31`,
`APISchoolSummary31`, `APISchoolListRank31`, `APISchoolSummaryRank31`). See
[Low-income measures](https://developer.schooldigger.com/data-quality#low-income).

## Vaccination rates in API 3.1

SDK 3.1 adds `vaccination` to `getSchool`: the state's published vaccination rates for the
school, with `source` (agency, url, `headlineLabel`, `suppressionNote`, `districtScope`),
`headline` (the state's lead figure, e.g. kindergartners with all required vaccines: `year`,
`gradeName`, `antigen`, `status`, `label`, `value`, `students`, `studentsTotal`,
`exemptionRate`), `districtName` / `countyName` / `stateName`, `yearsAvailable`,
`gradesAvailable` and `figures` (each year, grade, vaccine and status, with the school's value
and the state's own district, county and state values). By default `figures` holds the headline
grade for its most recent year; pass `includeVaccinationDetail: true` for every grade and year.
`searchSchools` carries the headline alone on each school as `vaccination`. Both are
`undefined` when the state publishes no vaccination data for the school, so check before use.

Each `value` has a `status`: `'exact'` (`pct`), `'range'` (`rangeLow` / `rangeHigh`),
`'suppressed'`, `'redactedCount'`, `'countOnly'` (see `students`) or `'invalid'`.

```ts
const school = await api.getSchool({ id: '530111000200', includeVaccinationDetail: true });
const v = school.vaccination;
const h = v?.headline;
if (!h?.value) console.log('no vaccination headline');
else {
  const val = h.value;
  const text = val.status === 'exact' ? `${val.pct}%`
    : val.status === 'range' ? `${val.rangeLow}-${val.rangeHigh}%`
    : val.status;
  console.log(`${h.label} (${h.year}): ${text}  [${v!.source?.agency}]`);
  console.log(`${v!.figures?.length} figures for years ${v!.yearsAvailable?.join(', ')}`);
}
```

District endpoints are unchanged. See
[Vaccination rates](https://developer.schooldigger.com/data-quality#vaccination).

## Batch requests (SDK 3.2)

The [async batch API](https://developer.schooldigger.com/batch-requests-schooldigger-api) runs up to
2,000 API GET calls for you, paced at half your plan's per-minute limit, and returns the results in
parts of 20. Each item counts as one API call; submitting, polling and downloading are free. Paid
plans only. `BatchClient` wraps it (Node 18+ or any runtime with `fetch`):

```ts
import { BatchClient, BatchError } from 'schooldigger';

const client = new BatchClient({ appID: 'YOUR_APP_ID', appKey: 'YOUR_APP_KEY' }); // or new BatchClient(config)
const batch = await client.submitBatch(
  ['530792001309', '530792003116'].map(id => ({ id, path: `/v3.1/schools/${id}` })) // plain path strings work too
);
for await (const { part, results } of client.waitForBatch(batch.batchId)) { // polls with Retry-After
  for (const r of results) console.log(r.id, r.status, r.body?.schoolName);   // {id, path, status, body}
}
```

| Method | Route |
|--------|-------|
| `submitBatch(items, { callbackUrl })` | `POST /batches` (returns `batchId`, `partCount`, ...) |
| `getBatch(batchId)` | `GET /batches/{batchId}` (status, `partsReady`, ...) |
| `getBatchResults(batchId, part)` | `GET /batches/{batchId}/results?part=N`, decoded NDJSON |
| `cancelBatch(batchId)` | `DELETE /batches/{batchId}` |
| `waitForBatch(batchId, { timeoutMs })` | async generator: yields each part as it becomes ready; throws `BatchNotCompletedError` if the batch ends `failed`, `canceled` or `expired` |

`body` is the plain JSON the same GET returns (not a model class). Error responses throw
`BatchError` with `status`, `message`, `description` and, for a rejected submit, `errors`.
To check a callback's `X-SchoolDigger-Signature` header, pass the raw request body to
`await verifySignature(rawBody, header, appKey)` (Web Crypto).

## Authentication

All API calls require an `appID` and `appKey`. Get your free API key at [developer.schooldigger.com](https://developer.schooldigger.com).

## Documentation

- [API Reference](https://developer.schooldigger.com/docs)
- [Get your free API key](https://developer.schooldigger.com)
- [SchoolDigger.com](https://www.schooldigger.com)

## Plans

| Plan | Price | Highlights |
|------|-------|------------|
| DEV/TEST | Free | Enterprise-level access, 20 calls/day |
| Basic | $19.90/mo | 1 year of data |
| Pro | $89/mo | Boundaries, geo search, finance |
| Enterprise | $189/mo | Full depth, boundary containment |

## License

MIT
