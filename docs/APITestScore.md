
# APITestScore


## Properties

Name | Type
------------ | -------------
`studentsEligible` | number
`studentsTested` | number
`meanScaledScore` | number
`percentMetStandard` | number
`numberMetStandard` | number
`numTier1` | number
`numTier2` | number
`numTier3` | number
`numTier4` | number
`numTier5` | number
`percentTier1` | number
`percentTier2` | number
`percentTier3` | number
`percentTier4` | number
`percentTier5` | number

## Example

```typescript
import type { APITestScore } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "studentsEligible": null,
  "studentsTested": null,
  "meanScaledScore": null,
  "percentMetStandard": null,
  "numberMetStandard": null,
  "numTier1": null,
  "numTier2": null,
  "numTier3": null,
  "numTier4": null,
  "numTier5": null,
  "percentTier1": null,
  "percentTier2": null,
  "percentTier3": null,
  "percentTier4": null,
  "percentTier5": null,
} satisfies APITestScore

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APITestScore
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


