
# APISchoolListRank21


## Properties

Name | Type
------------ | -------------
`rankYear` | number
`rankYearCompare` | number
`rankYearsAvailable` | Array&lt;number&gt;
`numberOfSchools` | number
`numberOfPages` | number
`schoolList` | [Array&lt;APISchoolSummary21&gt;](APISchoolSummary21.md)

## Example

```typescript
import type { APISchoolListRank21 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "rankYear": null,
  "rankYearCompare": null,
  "rankYearsAvailable": null,
  "numberOfSchools": null,
  "numberOfPages": null,
  "schoolList": null,
} satisfies APISchoolListRank21

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APISchoolListRank21
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


