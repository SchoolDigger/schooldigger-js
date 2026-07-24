
# APIDistrictAC


## Properties

Name | Type
------------ | -------------
`districtid` | string
`districtName` | string
`city` | string
`state` | string
`zip` | string
`lowGrade` | string
`highGrade` | string
`latitude` | number
`longitude` | number
`hasBoundary` | boolean
`rank` | number
`rankOf` | number
`rankStars` | number

## Example

```typescript
import type { APIDistrictAC } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "districtid": null,
  "districtName": null,
  "city": null,
  "state": null,
  "zip": null,
  "lowGrade": null,
  "highGrade": null,
  "latitude": null,
  "longitude": null,
  "hasBoundary": null,
  "rank": null,
  "rankOf": null,
  "rankStars": null,
} satisfies APIDistrictAC

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIDistrictAC
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


