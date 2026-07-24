
# APITestScoreWrapper


## Properties

Name | Type
------------ | -------------
`test` | string
`subject` | string
`year` | number
`grade` | string
`schoolTestScore` | [APITestScore](APITestScore.md)
`districtTestScore` | [APITestScore](APITestScore.md)
`stateTestScore` | [APITestScore](APITestScore.md)
`tier1` | string
`tier2` | string
`tier3` | string
`tier4` | string
`tier5` | string

## Example

```typescript
import type { APITestScoreWrapper } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "test": null,
  "subject": null,
  "year": null,
  "grade": null,
  "schoolTestScore": null,
  "districtTestScore": null,
  "stateTestScore": null,
  "tier1": null,
  "tier2": null,
  "tier3": null,
  "tier4": null,
  "tier5": null,
} satisfies APITestScoreWrapper

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APITestScoreWrapper
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


