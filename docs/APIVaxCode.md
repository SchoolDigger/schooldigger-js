
# APIVaxCode

A vaccine (antigen) or a vaccination status: a stable code and its display name (API 3.1). Antigen codes include ALL (all required vaccines), MMR, MEASLES, DTP_TD, TDAP, POLIO, HEPB, VARICELLA, MENACWY; status codes include IMMUNIZED, COMPLIANT, CONDITIONAL, NOT_UP_TO_DATE, EXEMPT_ANY, EXEMPT_MEDICAL, EXEMPT_NONMEDICAL, EXEMPT_RELIGIOUS, EXEMPT_PERSONAL. New codes can be added when a state publishes a new measure.

## Properties

Name | Type
------------ | -------------
`code` | string
`name` | string
`group` | string

## Example

```typescript
import type { APIVaxCode } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "name": null,
  "group": null,
} satisfies APIVaxCode

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIVaxCode
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


