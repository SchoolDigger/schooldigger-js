
# APITestScoreWrapper30

One test / subject / grade / year entry as returned by API 3.0, with school, district and state APITestScore30  objects. Unlike API 2.4 (APITestScoreWrapper) it does not hide rows the pre-2026 importer would not have  produced (spec R0 Invariant 2): a score object is present whenever the state reported anything for that level,  and the entry is present whenever at least one score object is.

## Properties

Name | Type
------------ | -------------
`test` | string
`subject` | string
`year` | number
`grade` | string
`schoolTestScore` | [APITestScore30](APITestScore30.md)
`districtTestScore` | [APITestScore30](APITestScore30.md)
`stateTestScore` | [APITestScore30](APITestScore30.md)
`tier1` | string
`tier2` | string
`tier3` | string
`tier4` | string
`tier5` | string

## Example

```typescript
import type { APITestScoreWrapper30 } from 'schooldigger'

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
} satisfies APITestScoreWrapper30

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APITestScoreWrapper30
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


