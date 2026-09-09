
# APIDistrictFull30

District detail record for API 3.0. Identical to 2.4 (APIDistrictFull21) except testScores, whose percent metrics  are a number or an APIReportedPercent object and whose rows are no longer limited to what the pre-2026 importers  produced (docs/suppressed-test-values-spec.md R6).

## Properties

Name | Type
------------ | -------------
`testScores` | [Array&lt;APITestScoreWrapper30&gt;](APITestScoreWrapper30.md)
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

## Example

```typescript
import type { APIDistrictFull30 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "testScores": null,
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
} satisfies APIDistrictFull30

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIDistrictFull30
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


