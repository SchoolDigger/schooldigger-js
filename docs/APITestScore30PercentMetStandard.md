
# APITestScore30PercentMetStandard

Percent of students meeting state standard: a number when the state reported an exact value, otherwise an APIReportedPercent object (range, suppressed, legacyImputed or derived). Absent when not reported.

## Properties

Name | Type
------------ | -------------
`status` | string
`value` | number
`low` | number
`high` | number

## Example

```typescript
import type { APITestScore30PercentMetStandard } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "value": null,
  "low": null,
  "high": null,
} satisfies APITestScore30PercentMetStandard

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APITestScore30PercentMetStandard
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


