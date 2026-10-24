
# APIVaxValue

A vaccination value as the state published it (API 3.1). status: \"exact\" (pct), \"range\" (rangeLow / rangeHigh; e.g. 95-100 for a published \"95% or more\"), \"suppressed\" (the state withheld the percent, usually for small groups; see source.suppressionNote), \"redactedCount\" (the state withheld a student count, e.g. \"fewer than 10\": see source.suppressedCountText), \"countOnly\" (the state published a count of students, not a percent: see students / studentsTotal) or \"invalid\" (not given: the published value is outside 0-100, qualityFlag 1, or the state\'s own figures contradict it, e.g. a non-report printed as zeros, qualityFlag 2).

## Properties

Name | Type
------------ | -------------
`status` | string
`pct` | number
`rangeLow` | number
`rangeHigh` | number

## Example

```typescript
import type { APIVaxValue } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "pct": null,
  "rangeLow": null,
  "rangeHigh": null,
} satisfies APIVaxValue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIVaxValue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


