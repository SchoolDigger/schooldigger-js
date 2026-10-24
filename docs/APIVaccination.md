
# APIVaccination

Vaccination rates as the state published them (API 3.1; docs/vaccination-spec.md R7). Present when the school\'s (or district\'s) state publishes vaccination data. By default figures holds one grade (the headline grade, else the first grade published for the school) for its most recent school year; add includeVaccinationDetail=true for every grade and every year (within the plan\'s yearly history window).

## Properties

Name | Type
------------ | -------------
`source` | [APIVaxSource](APIVaxSource.md)
`otherSources` | [Array&lt;APIVaxSource&gt;](APIVaxSource.md)
`headline` | [APIVaxHeadline](APIVaxHeadline.md)
`isDistrictFigure` | boolean
`districtName` | string
`countyName` | string
`stateName` | string
`yearsAvailable` | Array&lt;number&gt;
`gradesAvailable` | [Array&lt;APIVaxGrade&gt;](APIVaxGrade.md)
`detailIncluded` | boolean
`figures` | [Array&lt;APIVaxFigure&gt;](APIVaxFigure.md)
`grades` | [Array&lt;APIVaxGrade&gt;](APIVaxGrade.md)
`antigens` | [Array&lt;APIVaxCode&gt;](APIVaxCode.md)
`statuses` | [Array&lt;APIVaxCode&gt;](APIVaxCode.md)
`notes` | [Array&lt;APIVaxNote&gt;](APIVaxNote.md)

## Example

```typescript
import type { APIVaccination } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "source": null,
  "otherSources": null,
  "headline": null,
  "isDistrictFigure": null,
  "districtName": null,
  "countyName": null,
  "stateName": null,
  "yearsAvailable": null,
  "gradesAvailable": null,
  "detailIncluded": null,
  "figures": null,
  "grades": null,
  "antigens": null,
  "statuses": null,
  "notes": null,
} satisfies APIVaccination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIVaccination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


