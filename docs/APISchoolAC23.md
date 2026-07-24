
# APISchoolAC23


## Properties

Name | Type
------------ | -------------
`schoolid` | string
`schoolName` | string
`city` | string
`state` | string
`zip` | string
`schoolLevel` | string
`lowGrade` | string
`highGrade` | string
`latitude` | number
`longitude` | number
`rank` | number
`rankOf` | number
`rankStars` | number
`ncesPrivateSchoolID` | string

## Example

```typescript
import type { APISchoolAC23 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "schoolid": null,
  "schoolName": null,
  "city": null,
  "state": null,
  "zip": null,
  "schoolLevel": null,
  "lowGrade": null,
  "highGrade": null,
  "latitude": null,
  "longitude": null,
  "rank": null,
  "rankOf": null,
  "rankStars": null,
  "ncesPrivateSchoolID": null,
} satisfies APISchoolAC23

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APISchoolAC23
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


