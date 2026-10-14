
# APISchoolSummary31

School record in an API 3.1 school list: the v2.4 / v3.0 list record plus lowIncome.

## Properties

Name | Type
------------ | -------------
`lowIncome` | [APILowIncome](APILowIncome.md)
`schoolid` | string
`schoolName` | string
`phone` | string
`url` | string
`urlCompare` | string
`address` | [APILocation](APILocation.md)
`distance` | number
`locale` | string
`lowGrade` | string
`highGrade` | string
`schoolLevel` | string
`isCharterSchool` | string
`isMagnetSchool` | string
`isVirtualSchool` | string
`isTitleISchool` | string
`isTitleISchoolwideSchool` | string
`district` | [APIDistrictSum](APIDistrictSum.md)
`county` | [APICounty](APICounty.md)
`rankHistory` | [Array&lt;APIRankHistory&gt;](APIRankHistory.md)
`rankMovement` | number
`schoolYearlyDetails` | [Array&lt;APIYearlyDemographics&gt;](APIYearlyDemographics.md)
`isPrivate` | boolean
`privateDays` | number
`privateHours` | number
`privateHasLibrary` | boolean
`privateCoed` | string
`privateOrientation` | string
`ncesPrivateSchoolID` | string

## Example

```typescript
import type { APISchoolSummary31 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "lowIncome": null,
  "schoolid": null,
  "schoolName": null,
  "phone": null,
  "url": null,
  "urlCompare": null,
  "address": null,
  "distance": null,
  "locale": null,
  "lowGrade": null,
  "highGrade": null,
  "schoolLevel": null,
  "isCharterSchool": null,
  "isMagnetSchool": null,
  "isVirtualSchool": null,
  "isTitleISchool": null,
  "isTitleISchoolwideSchool": null,
  "district": null,
  "county": null,
  "rankHistory": null,
  "rankMovement": null,
  "schoolYearlyDetails": null,
  "isPrivate": null,
  "privateDays": null,
  "privateHours": null,
  "privateHasLibrary": null,
  "privateCoed": null,
  "privateOrientation": null,
  "ncesPrivateSchoolID": null,
} satisfies APISchoolSummary31

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APISchoolSummary31
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


