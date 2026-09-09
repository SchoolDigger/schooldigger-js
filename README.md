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

## Test scores in API 3.0

This version of the SDK targets API 3.0. Pass `includeRanges: true` to `getSchool` / `getDistrict`
(without it the record is identical to API 2.4). Each test-score percent
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
