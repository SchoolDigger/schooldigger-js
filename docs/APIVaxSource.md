
# APIVaxSource

The state agency and publication the vaccination figures come from (API 3.1).

## Properties

Name | Type
------------ | -------------
`id` | number
`agency` | string
`url` | string
`headlineLabel` | string
`suppressionNote` | string
`suppressedCountText` | string
`districtScope` | string
`stateFigureLabel` | string
`isLegacy` | boolean

## Example

```typescript
import type { APIVaxSource } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "agency": null,
  "url": null,
  "headlineLabel": null,
  "suppressionNote": null,
  "suppressedCountText": null,
  "districtScope": null,
  "stateFigureLabel": null,
  "isLegacy": null,
} satisfies APIVaxSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIVaxSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


