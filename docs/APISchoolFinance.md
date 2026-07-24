
# APISchoolFinance


## Properties

Name | Type
------------ | -------------
`year` | number
`spendingPerStudent` | number
`spendingFederalPersonnel` | number
`spendingFederalNonPersonnel` | number
`spendingStateLocalPersonnel` | number
`spendingStateLocalNonPersonnel` | number
`spendingPerStudentFederal` | number
`spendingPerStudentStateLocal` | number

## Example

```typescript
import type { APISchoolFinance } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "year": null,
  "spendingPerStudent": null,
  "spendingFederalPersonnel": null,
  "spendingFederalNonPersonnel": null,
  "spendingStateLocalPersonnel": null,
  "spendingStateLocalNonPersonnel": null,
  "spendingPerStudentFederal": null,
  "spendingPerStudentStateLocal": null,
} satisfies APISchoolFinance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APISchoolFinance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


