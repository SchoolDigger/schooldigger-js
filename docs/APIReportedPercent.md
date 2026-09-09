
# APIReportedPercent

A percent metric (percentMetStandard, percentTier1..5) that the state did not publish as a single exact number.  In API 3.0 a percent metric is EITHER a plain number (the state reported an exact value) OR this object, and is  absent when nothing was reported. status is one of: \'range\' (the state published only a range: low / high are  the state\'s bounds), \'suppressed\' (withheld by the state to protect student privacy; no value), \'legacyImputed\'  (a pre-2018 SchoolDigger stand-in: value is the 4 / 96 number older API versions return, low / high are the  state\'s bounds), \'derived\' (computed by SchoolDigger from the other reported levels: value when exact, otherwise  low / high). Rendering rule: exact 82.3 -&gt; \'82.3%\'; low 0 -&gt; \'&lt; 10%\'; high 100 -&gt; \'&gt;= 95%\'; otherwise  \'10-15%\'; suppressed -&gt; a dash. See https://developer.schooldigger.com/data-quality

## Properties

Name | Type
------------ | -------------
`status` | string
`value` | number
`low` | number
`high` | number

## Example

```typescript
import type { APIReportedPercent } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "value": null,
  "low": null,
  "high": null,
} satisfies APIReportedPercent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIReportedPercent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


