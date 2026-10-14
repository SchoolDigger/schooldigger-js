
# APIFreeReducedLunch

Students eligible for free or reduced-price school meals in one school year (API 3.1). Either count and percent, or a status when the reported count is not usable as a percent: \"communityEligibility\" (count is 98% or more of enrollment; the school likely serves free meals to all students), \"repeated\" (the state repeated the prior year\'s counts for most schools; not shown), \"aboveEnrollment\" (count exceeds enrollment; not shown).

## Properties

Name | Type
------------ | -------------
`status` | string
`count` | number
`percent` | number

## Example

```typescript
import type { APIFreeReducedLunch } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "count": null,
  "percent": null,
} satisfies APIFreeReducedLunch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIFreeReducedLunch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


