
# APISchoolListRank31

API 3.1 school ranking list (/v3.1/rankings/schools/{st}): the v2.1-v3.0 ranking list with lowIncome on each school.

## Properties

Name | Type
------------ | -------------
`schoolList` | [Array&lt;APISchoolSummaryRank31&gt;](APISchoolSummaryRank31.md)
`rankYear` | number
`rankYearCompare` | number
`rankYearsAvailable` | Array&lt;number&gt;
`numberOfSchools` | number
`numberOfPages` | number

## Example

```typescript
import type { APISchoolListRank31 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "schoolList": null,
  "rankYear": null,
  "rankYearCompare": null,
  "rankYearsAvailable": null,
  "numberOfSchools": null,
  "numberOfPages": null,
} satisfies APISchoolListRank31

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APISchoolListRank31
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


