
# APILowIncome

The school\'s low-income measure (API 3.1; docs/lunch-measures-spec.md R1, R6). One of:  \"FRL\" = students eligible for free or reduced-price school meals;  \"DC\" = students directly certified for free meals (SNAP, TANF, FDPIR, Medicaid in most states, or homeless, migrant, runaway, foster or Head Start), used when the school does not report a usable free/reduced count;  \"CEP\" = the school\'s free/reduced count is 98% or more of enrollment and it reports no direct certification count, which usually means it serves free meals to all students under the Community Eligibility Provision (no percent).  FRL and DC are not comparable: do not rank or sort one against the other. Values older than 3 years are not used, and counts above enrollment are treated as missing. Absent when the school has no usable value.

## Properties

Name | Type
------------ | -------------
`type` | string
`year` | number
`percent` | number
`count` | number
`enrollment` | number
`communityEligibilityLikely` | boolean
`statewideFreeMeals` | boolean

## Example

```typescript
import type { APILowIncome } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "year": null,
  "percent": null,
  "count": null,
  "enrollment": null,
  "communityEligibilityLikely": null,
  "statewideFreeMeals": null,
} satisfies APILowIncome

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APILowIncome
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


