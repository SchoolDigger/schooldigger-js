# SchoolsApi

All URIs are relative to *https://api.schooldigger.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSchool**](SchoolsApi.md#getschool) | **GET** /v2.4/schools/{id} | Returns a detailed record for one school |
| [**searchSchools**](SchoolsApi.md#searchschools) | **GET** /v2.4/schools | Returns a list of schools |



## getSchool

> APISchoolFull22 getSchool(id)

Returns a detailed record for one school

Retrieve a school record from the SchoolDigger database

### Example

```ts
import {
  Configuration,
  SchoolsApi,
} from 'schooldigger';
import type { GetSchoolRequest } from 'schooldigger';

async function example() {
  console.log("🚀 Testing schooldigger SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: appID
    apiKey: "YOUR API KEY",
    // To configure API key authorization: appKey
    apiKey: "YOUR API KEY",
  });
  const api = new SchoolsApi(config);

  const body = {
    // string | The 12 digit School ID (e.g. 064215006903)
    id: id_example,
  } satisfies GetSchoolRequest;

  try {
    const data = await api.getSchool(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The 12 digit School ID (e.g. 064215006903) | [Defaults to `undefined`] |

### Return type

[**APISchoolFull22**](APISchoolFull22.md)

### Authorization

[appID](../README.md#appID), [appKey](../README.md#appKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchSchools

> APISchoolList22 searchSchools(st, q, qSearchSchoolNameOnly, districtID, level, city, zip, isMagnet, isCharter, isVirtual, isTitleI, isTitleISchoolwide, nearLatitude, nearLongitude, nearAddress, distanceMiles, boxLatitudeNW, boxLongitudeNW, boxLatitudeSE, boxLongitudeSE, page, perPage, sortBy, includeUnrankedSchoolsInRankSort)

Returns a list of schools

Search the SchoolDigger database for schools. You may use any combination of criteria as query parameters. New in v2.4: location searches (nearLatitude/nearLongitude, nearAddress, or box coordinates) no longer require \&#39;st\&#39; and may return schools from more than one state.

### Example

```ts
import {
  Configuration,
  SchoolsApi,
} from 'schooldigger';
import type { SearchSchoolsRequest } from 'schooldigger';

async function example() {
  console.log("🚀 Testing schooldigger SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: appID
    apiKey: "YOUR API KEY",
    // To configure API key authorization: appKey
    apiKey: "YOUR API KEY",
  });
  const api = new SchoolsApi(config);

  const body = {
    // string | Two character state (e.g. \'CA\') - optional if you supply a location search (nearLatitude/nearLongitude, nearAddress, or box coordinates) or a districtID; required otherwise. Location searches without \'st\' may return schools from multiple states. (optional)
    st: st_example,
    // string | Search term - note: will match school name or city (optional) (optional)
    q: q_example,
    // boolean | For parameter \'q\', only search school names instead of school and city (optional) (optional)
    qSearchSchoolNameOnly: true,
    // string | Search for schools within this district (7 digit district id) (optional) (optional)
    districtID: districtID_example,
    // string | Search for schools at this level. Valid values: \'Elementary\', \'Middle\', \'High\', \'Alt\', \'Public\', \'Private\' (optional). \'Public\' returns all Elementary, Middle, High and Alternative schools (optional)
    level: level_example,
    // string | Search for schools in this city (optional) (optional)
    city: city_example,
    // string | Search for schools in this 5-digit zip code (optional) (optional)
    zip: zip_example,
    // boolean | True = return only magnet schools, False = return only non-magnet schools (optional) (Pro, Enterprise API levels only) (optional)
    isMagnet: true,
    // boolean | True = return only charter schools, False = return only non-charter schools (optional) (Pro, Enterprise API levels only) (optional)
    isCharter: true,
    // boolean | True = return only virtual schools, False = return only non-virtual schools (optional) (Pro, Enterprise API levels only) (optional)
    isVirtual: true,
    // boolean | True = return only Title I schools, False = return only non-Title I schools (optional) (Pro, Enterprise API levels only) (optional)
    isTitleI: true,
    // boolean | True = return only Title I school-wide schools, False = return only non-Title I school-wide schools (optional) (Pro, Enterprise API levels only) (optional)
    isTitleISchoolwide: true,
    // number | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only.) (optional)
    nearLatitude: 1.2,
    // number | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only.) (optional)
    nearLongitude: 1.2,
    // string | Search for schools within (distanceMiles) of this address. Example: \'123 Main St. AnyTown CA 90001\' (optional) (Pro, Enterprise API level only) IMPORTANT NOTE: If you have the lat/long of the address, use nearLatitude and nearLongitude instead for much faster response times (optional)
    nearAddress: nearAddress_example,
    // number | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only) (optional)
    distanceMiles: 56,
    // number | Search for schools within a \'box\' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) (optional)
    boxLatitudeNW: 1.2,
    // number | Search for schools within a \'box\' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) (optional)
    boxLongitudeNW: 1.2,
    // number | Search for schools within a \'box\' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) (optional)
    boxLatitudeSE: 1.2,
    // number | Search for schools within a \'box\' defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) (optional)
    boxLongitudeSE: 1.2,
    // number | Page number to retrieve (optional, default: 1) (optional)
    page: 56,
    // number | Number of schools to retrieve on a page (50 max) (optional, default: 10) (optional)
    perPage: 56,
    // string | Sort list. Values are: schoolname, distance, rank. For descending order, precede with \'-\' i.e. -schoolname (optional, default: schoolname) (optional)
    sortBy: sortBy_example,
    // boolean | If sortBy is \'rank\', this boolean determines if schools with no rank are included in the result (optional, default: false) (optional)
    includeUnrankedSchoolsInRankSort: true,
  } satisfies SearchSchoolsRequest;

  try {
    const data = await api.searchSchools(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **st** | `string` | Two character state (e.g. \&#39;CA\&#39;) - optional if you supply a location search (nearLatitude/nearLongitude, nearAddress, or box coordinates) or a districtID; required otherwise. Location searches without \&#39;st\&#39; may return schools from multiple states. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Search term - note: will match school name or city (optional) | [Optional] [Defaults to `undefined`] |
| **qSearchSchoolNameOnly** | `boolean` | For parameter \&#39;q\&#39;, only search school names instead of school and city (optional) | [Optional] [Defaults to `undefined`] |
| **districtID** | `string` | Search for schools within this district (7 digit district id) (optional) | [Optional] [Defaults to `undefined`] |
| **level** | `string` | Search for schools at this level. Valid values: \&#39;Elementary\&#39;, \&#39;Middle\&#39;, \&#39;High\&#39;, \&#39;Alt\&#39;, \&#39;Public\&#39;, \&#39;Private\&#39; (optional). \&#39;Public\&#39; returns all Elementary, Middle, High and Alternative schools | [Optional] [Defaults to `undefined`] |
| **city** | `string` | Search for schools in this city (optional) | [Optional] [Defaults to `undefined`] |
| **zip** | `string` | Search for schools in this 5-digit zip code (optional) | [Optional] [Defaults to `undefined`] |
| **isMagnet** | `boolean` | True &#x3D; return only magnet schools, False &#x3D; return only non-magnet schools (optional) (Pro, Enterprise API levels only) | [Optional] [Defaults to `undefined`] |
| **isCharter** | `boolean` | True &#x3D; return only charter schools, False &#x3D; return only non-charter schools (optional) (Pro, Enterprise API levels only) | [Optional] [Defaults to `undefined`] |
| **isVirtual** | `boolean` | True &#x3D; return only virtual schools, False &#x3D; return only non-virtual schools (optional) (Pro, Enterprise API levels only) | [Optional] [Defaults to `undefined`] |
| **isTitleI** | `boolean` | True &#x3D; return only Title I schools, False &#x3D; return only non-Title I schools (optional) (Pro, Enterprise API levels only) | [Optional] [Defaults to `undefined`] |
| **isTitleISchoolwide** | `boolean` | True &#x3D; return only Title I school-wide schools, False &#x3D; return only non-Title I school-wide schools (optional) (Pro, Enterprise API levels only) | [Optional] [Defaults to `undefined`] |
| **nearLatitude** | `number` | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only.) | [Optional] [Defaults to `undefined`] |
| **nearLongitude** | `number` | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only.) | [Optional] [Defaults to `undefined`] |
| **nearAddress** | `string` | Search for schools within (distanceMiles) of this address. Example: \&#39;123 Main St. AnyTown CA 90001\&#39; (optional) (Pro, Enterprise API level only) IMPORTANT NOTE: If you have the lat/long of the address, use nearLatitude and nearLongitude instead for much faster response times | [Optional] [Defaults to `undefined`] |
| **distanceMiles** | `number` | Search for schools within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 5 miles) (optional) (Pro, Enterprise API levels only) | [Optional] [Defaults to `undefined`] |
| **boxLatitudeNW** | `number` | Search for schools within a \&#39;box\&#39; defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) | [Optional] [Defaults to `undefined`] |
| **boxLongitudeNW** | `number` | Search for schools within a \&#39;box\&#39; defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) | [Optional] [Defaults to `undefined`] |
| **boxLatitudeSE** | `number` | Search for schools within a \&#39;box\&#39; defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) | [Optional] [Defaults to `undefined`] |
| **boxLongitudeSE** | `number` | Search for schools within a \&#39;box\&#39; defined by (boxLatitudeNW/boxLongitudeNW) to (boxLongitudeSE/boxLatitudeSE) (optional) | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number to retrieve (optional, default: 1) | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Number of schools to retrieve on a page (50 max) (optional, default: 10) | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Sort list. Values are: schoolname, distance, rank. For descending order, precede with \&#39;-\&#39; i.e. -schoolname (optional, default: schoolname) | [Optional] [Defaults to `undefined`] |
| **includeUnrankedSchoolsInRankSort** | `boolean` | If sortBy is \&#39;rank\&#39;, this boolean determines if schools with no rank are included in the result (optional, default: false) | [Optional] [Defaults to `undefined`] |

### Return type

[**APISchoolList22**](APISchoolList22.md)

### Authorization

[appID](../README.md#appID), [appKey](../README.md#appKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

