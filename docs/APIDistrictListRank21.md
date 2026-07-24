
# APIDistrictListRank21


## Properties

Name | Type
------------ | -------------
`rankYear` | number
`rankYearCompare` | number
`rankYearsAvailable` | Array&lt;number&gt;
`numberOfDistricts` | number
`numberOfPages` | number
`districtList` | [Array&lt;APIDistrictSummary21&gt;](APIDistrictSummary21.md)
`rankCompareYear` | number

## Example

```typescript
import type { APIDistrictListRank21 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "rankYear": null,
  "rankYearCompare": null,
  "rankYearsAvailable": null,
  "numberOfDistricts": null,
  "numberOfPages": null,
  "districtList": null,
  "rankCompareYear": null,
} satisfies APIDistrictListRank21

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIDistrictListRank21
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


