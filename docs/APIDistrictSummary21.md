
# APIDistrictSummary21


## Properties

Name | Type
------------ | -------------
`districtID` | string
`districtName` | string
`phone` | string
`url` | string
`address` | [APILocation](APILocation.md)
`locationIsWithinBoundary` | boolean
`hasBoundary` | boolean
`distance` | number
`isWithinBoundary` | boolean
`county` | [APICounty](APICounty.md)
`lowGrade` | string
`highGrade` | string
`numberTotalSchools` | number
`numberPrimarySchools` | number
`numberMiddleSchools` | number
`numberHighSchools` | number
`numberAlternativeSchools` | number
`rankHistory` | [Array&lt;APILEARankHistory&gt;](APILEARankHistory.md)
`districtYearlyDetails` | [Array&lt;APILEAYearlyDetail&gt;](APILEAYearlyDetail.md)

## Example

```typescript
import type { APIDistrictSummary21 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "districtID": null,
  "districtName": null,
  "phone": null,
  "url": null,
  "address": null,
  "locationIsWithinBoundary": null,
  "hasBoundary": null,
  "distance": null,
  "isWithinBoundary": null,
  "county": null,
  "lowGrade": null,
  "highGrade": null,
  "numberTotalSchools": null,
  "numberPrimarySchools": null,
  "numberMiddleSchools": null,
  "numberHighSchools": null,
  "numberAlternativeSchools": null,
  "rankHistory": null,
  "districtYearlyDetails": null,
} satisfies APIDistrictSummary21

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIDistrictSummary21
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


