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
