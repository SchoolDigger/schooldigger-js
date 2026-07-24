
# APIDistrictFull21


## Properties

Name | Type
------------ | -------------
`districtID` | string
`districtName` | string
`phone` | string
`url` | string
`address` | [APILocation](APILocation.md)
`lowGrade` | string
`highGrade` | string
`numberTotalSchools` | number
`numberPrimarySchools` | number
`numberMiddleSchools` | number
`numberHighSchools` | number
`numberAlternativeSchools` | number
`boundary` | [APIBoundary12](APIBoundary12.md)
`finance` | [Array&lt;APISchoolFinance&gt;](APISchoolFinance.md)
`graduationRates` | [Array&lt;APIGraduationRate&gt;](APIGraduationRate.md)
`dropoutRates` | [Array&lt;APIDropoutRate&gt;](APIDropoutRate.md)
`chronicAbsenteeismRates` | [Array&lt;APIChronicAbsenteeismRate&gt;](APIChronicAbsenteeismRate.md)
`isWithinBoundary` | boolean
`county` | [APICounty](APICounty.md)
`rankHistory` | [Array&lt;APILEARankHistory&gt;](APILEARankHistory.md)
`districtYearlyDetails` | [Array&lt;APILEAYearlyDetail&gt;](APILEAYearlyDetail.md)
`testScores` | [Array&lt;APITestScoreWrapper&gt;](APITestScoreWrapper.md)

## Example

```typescript
import type { APIDistrictFull21 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "districtID": null,
  "districtName": null,
  "phone": null,
  "url": null,
  "address": null,
  "lowGrade": null,
  "highGrade": null,
  "numberTotalSchools": null,
  "numberPrimarySchools": null,
  "numberMiddleSchools": null,
  "numberHighSchools": null,
  "numberAlternativeSchools": null,
  "boundary": null,
  "finance": null,
  "graduationRates": null,
  "dropoutRates": null,
  "chronicAbsenteeismRates": null,
  "isWithinBoundary": null,
  "county": null,
  "rankHistory": null,
  "districtYearlyDetails": null,
  "testScores": null,
} satisfies APIDistrictFull21

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIDistrictFull21
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


