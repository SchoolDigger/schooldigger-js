
# APISchoolList31

API 3.1 school list (/v3.1/schools): the v2.4 / v3.0 list with lowIncome and the vaccination headline on each  school (SchoolListSD2_API_12: SchoolListSD2_API_11 plus the VaxSchoolSummary columns, issue-76-vax-90).

## Properties

Name | Type
------------ | -------------
`schoolList` | [Array&lt;APISchoolSummary31&gt;](APISchoolSummary31.md)
`numberOfSchools` | number
`numberOfPages` | number

## Example

```typescript
import type { APISchoolList31 } from 'schooldigger'

// TODO: Update the object below with actual values
const example = {
  "schoolList": null,
  "numberOfSchools": null,
  "numberOfPages": null,
} satisfies APISchoolList31

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APISchoolList31
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


