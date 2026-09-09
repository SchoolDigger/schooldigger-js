# AutocompleteApi

All URIs are relative to *https://api.schooldigger.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**autocompleteDistricts**](AutocompleteApi.md#autocompletedistricts) | **GET** /v3.0/autocomplete/districts | Returns a simple and quick list of districts for use in a client-typed autocomplete |
| [**autocompleteSchools**](AutocompleteApi.md#autocompleteschools) | **GET** /v3.0/autocomplete/schools | Returns a simple and quick list of schools for use in a client-typed autocomplete |



## autocompleteDistricts

> APIAutocompleteDistrictResult autocompleteDistricts(q, st, boxLatitudeNW, boxLongitudeNW, boxLatitudeSE, boxLongitudeSE, returnCount)

Returns a simple and quick list of districts for use in a client-typed autocomplete



### Example

```ts
import {
  Configuration,
  AutocompleteApi,
} from 'schooldigger';
import type { AutocompleteDistrictsRequest } from 'schooldigger';

async function example() {
  console.log("🚀 Testing schooldigger SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: appID
    apiKey: "YOUR API KEY",
    // To configure API key authorization: appKey
    apiKey: "YOUR API KEY",
  });
  const api = new AutocompleteApi(config);

  const body = {
    // string | Search term for autocomplete (e.g. \'Lincol\') (required) (optional)
    q: q_example,
    // string | Two character state (e.g. \'CA\') (optional -- leave blank to search entire U.S.) (optional)
    st: st_example,
    // number | Search within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) (optional)
    boxLatitudeNW: 1.2,
    // number | Search within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) (optional)
    boxLongitudeNW: 1.2,
    // number | Search within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) (optional)
    boxLatitudeSE: 1.2,
    // number | Search within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) (optional)
    boxLongitudeSE: 1.2,
    // number | Number of districts to return. Valid values: 1-20. (default: 10) (optional)
    returnCount: 56,
  } satisfies AutocompleteDistrictsRequest;

  try {
    const data = await api.autocompleteDistricts(body);
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
| **q** | `string` | Search term for autocomplete (e.g. \&#39;Lincol\&#39;) (required) | [Optional] [Defaults to `undefined`] |
| **st** | `string` | Two character state (e.g. \&#39;CA\&#39;) (optional -- leave blank to search entire U.S.) | [Optional] [Defaults to `undefined`] |
| **boxLatitudeNW** | `number` | Search within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) | [Optional] [Defaults to `undefined`] |
| **boxLongitudeNW** | `number` | Search within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) | [Optional] [Defaults to `undefined`] |
| **boxLatitudeSE** | `number` | Search within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) | [Optional] [Defaults to `undefined`] |
| **boxLongitudeSE** | `number` | Search within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise API levels only.) | [Optional] [Defaults to `undefined`] |
| **returnCount** | `number` | Number of districts to return. Valid values: 1-20. (default: 10) | [Optional] [Defaults to `undefined`] |

### Return type

[**APIAutocompleteDistrictResult**](APIAutocompleteDistrictResult.md)

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


## autocompleteSchools

> APIAutocompleteSchoolResult23 autocompleteSchools(q, qSearchCityStateName, st, level, districtID, boxLatitudeNW, boxLongitudeNW, boxLatitudeSE, boxLongitudeSE, returnCount)

Returns a simple and quick list of schools for use in a client-typed autocomplete



### Example

```ts
import {
  Configuration,
  AutocompleteApi,
} from 'schooldigger';
import type { AutocompleteSchoolsRequest } from 'schooldigger';

async function example() {
  console.log("🚀 Testing schooldigger SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: appID
    apiKey: "YOUR API KEY",
    // To configure API key authorization: appKey
    apiKey: "YOUR API KEY",
  });
  const api = new AutocompleteApi(config);

  const body = {
    // string | Search term for autocomplete (e.g. \'Lincol\') (required) (optional)
    q: q_example,
    // boolean | Extend the search term to include city and state (e.g. \'Lincoln el paso\' matches Lincoln Middle School in El Paso) (optional) (optional)
    qSearchCityStateName: true,
    // string | Two character state (e.g. \'CA\') (optional -- leave blank to search entire U.S.) (optional)
    st: st_example,
    // string | Search for schools at this level only. Valid values: \'Elementary\', \'Middle\', \'High\', \'Alt\', \'Private\' (optional - leave blank to search for all schools) (optional)
    level: level_example,
    // string | Search within SchoolDigger District ID (optional. Pro, Enterprise, and Autocomplete Pro levels only.) (optional)
    districtID: districtID_example,
    // number | Search within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise, and Autocomplete Pro levels only.) (optional)
    boxLatitudeNW: 1.2,
    // number | Search within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise, and Autocomplete Pro levels only.) (optional)
    boxLongitudeNW: 1.2,
    // number | Search within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise, and Autocomplete Pro levels only.) (optional)
    boxLatitudeSE: 1.2,
    // number | Search within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise, and Autocomplete Pro levels only.) (optional)
    boxLongitudeSE: 1.2,
    // number | Number of schools to return. Valid values: 1-20. (default: 10) (optional)
    returnCount: 56,
  } satisfies AutocompleteSchoolsRequest;

  try {
    const data = await api.autocompleteSchools(body);
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
| **q** | `string` | Search term for autocomplete (e.g. \&#39;Lincol\&#39;) (required) | [Optional] [Defaults to `undefined`] |
| **qSearchCityStateName** | `boolean` | Extend the search term to include city and state (e.g. \&#39;Lincoln el paso\&#39; matches Lincoln Middle School in El Paso) (optional) | [Optional] [Defaults to `undefined`] |
| **st** | `string` | Two character state (e.g. \&#39;CA\&#39;) (optional -- leave blank to search entire U.S.) | [Optional] [Defaults to `undefined`] |
| **level** | `string` | Search for schools at this level only. Valid values: \&#39;Elementary\&#39;, \&#39;Middle\&#39;, \&#39;High\&#39;, \&#39;Alt\&#39;, \&#39;Private\&#39; (optional - leave blank to search for all schools) | [Optional] [Defaults to `undefined`] |
| **districtID** | `string` | Search within SchoolDigger District ID (optional. Pro, Enterprise, and Autocomplete Pro levels only.) | [Optional] [Defaults to `undefined`] |
| **boxLatitudeNW** | `number` | Search within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise, and Autocomplete Pro levels only.) | [Optional] [Defaults to `undefined`] |
| **boxLongitudeNW** | `number` | Search within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise, and Autocomplete Pro levels only.) | [Optional] [Defaults to `undefined`] |
| **boxLatitudeSE** | `number` | Search within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise, and Autocomplete Pro levels only.) | [Optional] [Defaults to `undefined`] |
| **boxLongitudeSE** | `number` | Search within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional. Pro, Enterprise, and Autocomplete Pro levels only.) | [Optional] [Defaults to `undefined`] |
| **returnCount** | `number` | Number of schools to return. Valid values: 1-20. (default: 10) | [Optional] [Defaults to `undefined`] |

### Return type

[**APIAutocompleteSchoolResult23**](APIAutocompleteSchoolResult23.md)

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

