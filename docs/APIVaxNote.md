
# APIVaxNote

A footnote the state\'s data carries (API 3.1), e.g. a change of definition between years. Figures list the ids of the notes that apply to them.

## Properties

Name | Type
------------ | -------------
`id` | number
`text` | string

## Example

```typescript
import type { APIVaxNote } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "text": null,
} satisfies APIVaxNote

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIVaxNote
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


