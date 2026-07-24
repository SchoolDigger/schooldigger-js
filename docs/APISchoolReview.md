
# APISchoolReview


## Properties

Name | Type
------------ | -------------
`submitDate` | string
`numberOfStars` | number
`comment` | string
`submittedBy` | string

## Example

```typescript
import type { APISchoolReview } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "submitDate": null,
  "numberOfStars": null,
  "comment": null,
  "submittedBy": null,
} satisfies APISchoolReview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APISchoolReview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


