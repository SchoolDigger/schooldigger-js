
# APIVaxLevelValue

One level\'s published value for a measure (API 3.1): the school\'s own figure, or the state\'s own published district, county or state figure for the same year, grade, vaccine and status. SchoolDigger never calculates district, county or state figures; they appear only where the state publishes them.

## Properties

Name | Type
------------ | -------------
`status` | string
`pct` | number
`rangeLow` | number
`rangeHigh` | number
`students` | number
`studentsTotal` | number
`sector` | string
`qualityFlag` | number
`notes` | Array&lt;number&gt;
`sourceId` | number

## Example

```typescript
import type { APIVaxLevelValue } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "pct": null,
  "rangeLow": null,
  "rangeHigh": null,
  "students": null,
  "studentsTotal": null,
  "sector": null,
  "qualityFlag": null,
  "notes": null,
  "sourceId": null,
} satisfies APIVaxLevelValue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIVaxLevelValue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


