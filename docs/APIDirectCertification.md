
# APIDirectCertification

Students directly certified for free meals in one school year (API 3.1): approved automatically, without a meal application, through SNAP, TANF, FDPIR or Medicaid (most states), or because they are homeless, migrant, runaway, in foster care or in Head Start. Usually lower than free/reduced lunch eligibility and not comparable to it. Collected from 2016-17.

## Properties

Name | Type
------------ | -------------
`count` | number
`percent` | number

## Example

```typescript
import type { APIDirectCertification } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "percent": null,
} satisfies APIDirectCertification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIDirectCertification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


