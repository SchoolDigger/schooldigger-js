
# APILocation


## Properties

Name | Type
------------ | -------------
`latLong` | [APILatLong](APILatLong.md)
`street` | string
`city` | string
`state` | string
`stateFull` | string
`zip` | string
`zip4` | string
`cityURL` | string
`zipURL` | string
`html` | string

## Example

```typescript
import type { APILocation } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "latLong": null,
  "street": null,
  "city": null,
  "state": null,
  "stateFull": null,
  "zip": null,
  "zip4": null,
  "cityURL": null,
  "zipURL": null,
  "html": null,
} satisfies APILocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APILocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


