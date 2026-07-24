
# APIDropoutRate


## Properties

Name | Type
------------ | -------------
`year` | number
`schoolDropoutRate` | number
`districtDropoutRate` | number
`stateDropoutRate` | number

## Example

```typescript
import type { APIDropoutRate } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "schoolDropoutRate": null,
  "districtDropoutRate": null,
  "stateDropoutRate": null,
} satisfies APIDropoutRate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIDropoutRate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


