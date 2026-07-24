
# APIRankHistory


## Properties

Name | Type
------------ | -------------
`year` | number
`rank` | number
`rankOf` | number
`rankStars` | number
`rankLevel` | string
`rankStatewidePercentage` | number
`averageStandardScore` | number

## Example

```typescript
import type { APIRankHistory } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "rank": null,
  "rankOf": null,
  "rankStars": null,
  "rankLevel": null,
  "rankStatewidePercentage": null,
  "averageStandardScore": null,
} satisfies APIRankHistory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIRankHistory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


