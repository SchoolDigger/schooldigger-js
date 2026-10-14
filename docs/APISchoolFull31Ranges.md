
# APISchoolFull31Ranges

School detail record for API 3.1 with includeRanges=true: the v3.0 includeRanges record (test-score percents as a  number or an APIReportedPercent object) plus lowIncome and the yearly freeReducedLunch / directCertification objects.

## Properties

Name | Type
------------ | -------------
`lowIncome` | [APILowIncome](APILowIncome.md)
`schoolYearlyDetails` | [Array&lt;APIYearlyDemographics31&gt;](APIYearlyDemographics31.md)
`testScores` | [Array&lt;APITestScoreWrapper30&gt;](APITestScoreWrapper30.md)
`schoolid` | string
`schoolName` | string
`phone` | string
`url` | string
`urlSchoolDigger` | string
`urlCompareSchoolDigger` | string
`address` | [APILocation](APILocation.md)
`locale` | string
`lowGrade` | string
`highGrade` | string
`schoolLevel` | string
`isCharterSchool` | string
`isMagnetSchool` | string
`isVirtualSchool` | string
`isTitleISchool` | string
`isTitleISchoolwideSchool` | string
`isPrivate` | boolean
`privateDays` | number
`privateHours` | number
`privateHasLibrary` | boolean
`privateCoed` | string
`privateOrientation` | string
`ncesPrivateSchoolID` | string
`district` | [APIDistrictSum](APIDistrictSum.md)
`county` | [APICounty](APICounty.md)
`reviews` | [Array&lt;APISchoolReview&gt;](APISchoolReview.md)
`finance` | [Array&lt;APISchoolFinance&gt;](APISchoolFinance.md)
`graduationRates` | [Array&lt;APIGraduationRate&gt;](APIGraduationRate.md)
`dropoutRates` | [Array&lt;APIDropoutRate&gt;](APIDropoutRate.md)
`chronicAbsenteeismRates` | [Array&lt;APIChronicAbsenteeismRate&gt;](APIChronicAbsenteeismRate.md)
`rankHistory` | [Array&lt;APIRankHistory&gt;](APIRankHistory.md)
`rankMovement` | number

## Example

```typescript
import type { APISchoolFull31Ranges } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "lowIncome": null,
  "schoolYearlyDetails": null,
  "testScores": null,
  "schoolid": null,
  "schoolName": null,
  "phone": null,
  "url": null,
  "urlSchoolDigger": null,
  "urlCompareSchoolDigger": null,
  "address": null,
  "locale": null,
  "lowGrade": null,
  "highGrade": null,
  "schoolLevel": null,
  "isCharterSchool": null,
  "isMagnetSchool": null,
  "isVirtualSchool": null,
  "isTitleISchool": null,
  "isTitleISchoolwideSchool": null,
  "isPrivate": null,
  "privateDays": null,
  "privateHours": null,
  "privateHasLibrary": null,
  "privateCoed": null,
  "privateOrientation": null,
  "ncesPrivateSchoolID": null,
  "district": null,
  "county": null,
  "reviews": null,
  "finance": null,
  "graduationRates": null,
  "dropoutRates": null,
  "chronicAbsenteeismRates": null,
  "rankHistory": null,
  "rankMovement": null,
} satisfies APISchoolFull31Ranges

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APISchoolFull31Ranges
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


