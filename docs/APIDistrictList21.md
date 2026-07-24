
# APIDistrictList21


## Properties

Name | Type
------------ | -------------
`districtList` | [Array&lt;APIDistrictSummary21&gt;](APIDistrictSummary21.md)
`numberOfDistricts` | number
`numberOfPages` | number

## Example

```typescript
import type { APIDistrictList21 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "districtList": null,
  "numberOfDistricts": null,
  "numberOfPages": null,
} satisfies APIDistrictList21

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIDistrictList21
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


