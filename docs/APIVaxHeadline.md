
# APIVaxHeadline

The headline vaccination figure (API 3.1): one grade, vaccine and status per state, as the state leads with it (e.g. kindergartners with all required vaccines, or with MMR where the state publishes no all-vaccine figure).

## Properties

Name | Type
------------ | -------------
`year` | number
`grade` | string
`gradeName` | string
`antigen` | [APIVaxCode](APIVaxCode.md)
`status` | [APIVaxCode](APIVaxCode.md)
`label` | string
`level` | string
`isDistrictFigure` | boolean
`sector` | string
`value` | [APIVaxValue](APIVaxValue.md)
`students` | number
`studentsTotal` | number
`exemptionRate` | number
`exemptionAntigen` | [APIVaxCode](APIVaxCode.md)
`notes` | Array&lt;number&gt;

## Example

```typescript
import type { APIVaxHeadline } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "grade": null,
  "gradeName": null,
  "antigen": null,
  "status": null,
  "label": null,
  "level": null,
  "isDistrictFigure": null,
  "sector": null,
  "value": null,
  "students": null,
  "studentsTotal": null,
  "exemptionRate": null,
  "exemptionAntigen": null,
  "notes": null,
} satisfies APIVaxHeadline

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIVaxHeadline
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


