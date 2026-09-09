
# APITestScore30

One test result (school, district or state level) as returned by API 3.0. Same members as the 2.4 object except  that the six percent metrics are either a plain number or an APIReportedPercent object (see that class), and a  score object is returned whenever the state reported anything - including a result that consists only of  suppressed or ranged values. Hand-written (not inherited from clsSD2testScore) because the number-or-object  union cannot come from the reflection copy the 2.4 models use.

## Properties

Name | Type
------------ | -------------
`studentsEligible` | number
`studentsTested` | number
`meanScaledScore` | number
`percentMetStandard` | [APITestScore30PercentMetStandard](APITestScore30PercentMetStandard.md)
`numberMetStandard` | number
`numTier1` | number
`numTier2` | number
`numTier3` | number
`numTier4` | number
`numTier5` | number
`percentTier1` | [APITestScore30PercentTier1](APITestScore30PercentTier1.md)
`percentTier2` | [APITestScore30PercentTier2](APITestScore30PercentTier2.md)
`percentTier3` | [APITestScore30PercentTier3](APITestScore30PercentTier3.md)
`percentTier4` | [APITestScore30PercentTier4](APITestScore30PercentTier4.md)
`percentTier5` | [APITestScore30PercentTier5](APITestScore30PercentTier5.md)

## Example

```typescript
import type { APITestScore30 } from 'schooldigger'

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
} satisfies APITestScore30

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APITestScore30
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


