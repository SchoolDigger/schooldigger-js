
# APIGraduationRate


## Properties

Name | Type
------------ | -------------
`year` | number
`schoolGraduationRate` | number
`districtGraduationRate` | number
`stateGraduationRate` | number

## Example

```typescript
import type { APIGraduationRate } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "schoolGraduationRate": null,
  "districtGraduationRate": null,
  "stateGraduationRate": null,
} satisfies APIGraduationRate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIGraduationRate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


