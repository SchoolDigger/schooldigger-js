
# APIVaxFigure

One published vaccination measure (API 3.1): a school year, grade, vaccine and status, with the value at each level the state publishes it for. A level is absent when the state published nothing for it.

## Properties

Name | Type
------------ | -------------
`year` | number
`grade` | string
`antigen` | string
`status` | string
`school` | [APIVaxLevelValue](APIVaxLevelValue.md)
`district` | [APIVaxLevelValue](APIVaxLevelValue.md)
`county` | [APIVaxLevelValue](APIVaxLevelValue.md)
`state` | [APIVaxLevelValue](APIVaxLevelValue.md)

## Example

```typescript
import type { APIVaxFigure } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "grade": null,
  "antigen": null,
  "status": null,
  "school": null,
  "district": null,
  "county": null,
  "state": null,
} satisfies APIVaxFigure

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIVaxFigure
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


