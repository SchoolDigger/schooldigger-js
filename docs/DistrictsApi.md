# DistrictsApi

All URIs are relative to *https://api.schooldigger.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDistrict**](DistrictsApi.md#getdistrict) | **GET** /v2.4/districts/{id} | Returns a detailed record for one district |
| [**searchDistricts**](DistrictsApi.md#searchdistricts) | **GET** /v2.4/districts | Returns a list of districts |



## getDistrict

> APIDistrictFull21 getDistrict(id)

Returns a detailed record for one district

Retrieve a single district record from the SchoolDigger database

### Example

```ts
import {
  Configuration,
  DistrictsApi,
} from 'schooldigger';
import type { GetDistrictRequest } from 'schooldigger';

async function example() {
  console.log("🚀 Testing schooldigger SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: appID
    apiKey: "YOUR API KEY",
    // To configure API key authorization: appKey
    apiKey: "YOUR API KEY",
  });
  const api = new DistrictsApi(config);

  const body = {
    // string | The 7 digit District ID (e.g. 0642150)
    id: id_example,
  } satisfies GetDistrictRequest;

  try {
    const data = await api.getDistrict(body);
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
| **id** | `string` | The 7 digit District ID (e.g. 0642150) | [Defaults to `undefined`] |

### Return type

[**APIDistrictFull21**](APIDistrictFull21.md)

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


## searchDistricts

> APIDistrictList21 searchDistricts(st, q, city, zip, nearLatitude, nearLongitude, boundaryAddress, distanceMiles, isInBoundaryOnly, boxLatitudeNW, boxLongitudeNW, boxLatitudeSE, boxLongitudeSE, page, perPage, sortBy, includeUnrankedDistrictsInRankSort)

Returns a list of districts

Search the SchoolDigger database for districts. You may use any combination of criteria as query parameters. New in v2.4: location searches (nearLatitude/nearLongitude, boundaryAddress, or box coordinates) no longer require \&#39;st\&#39; and may return districts from more than one state.

### Example

```ts
import {
  Configuration,
  DistrictsApi,
} from 'schooldigger';
import type { SearchDistrictsRequest } from 'schooldigger';

async function example() {
  console.log("🚀 Testing schooldigger SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: appID
    apiKey: "YOUR API KEY",
    // To configure API key authorization: appKey
    apiKey: "YOUR API KEY",
  });
  const api = new DistrictsApi(config);

  const body = {
    // string | Two character state (e.g. \'CA\') - optional if you supply a location search (nearLatitude/nearLongitude, boundaryAddress, or box coordinates); required otherwise. Location searches without \'st\' may return districts from multiple states. (optional)
    st: st_example,
    // string | Search term - note: will match district name or city (optional) (optional)
    q: q_example,
    // string | Search for districts in this city (optional) (optional)
    city: city_example,
    // string | Search for districts in this 5-digit zip code (optional) (optional)
    zip: zip_example,
    // number | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.) (optional)
    nearLatitude: 1.2,
    // number | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.) (optional)
    nearLongitude: 1.2,
    // string | Full U.S. address: flag returned districts that include this address in its attendance boundary. Example: \'123 Main St. AnyTown CA 90001\' (optional) (Enterprise API level only) (optional)
    boundaryAddress: boundaryAddress_example,
    // number | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 50 miles) (optional) (Pro, Enterprise API levels only) (optional)
    distanceMiles: 56,
    // boolean | Return only the districts that include given location (nearLatitude/nearLongitude) or (boundaryAddress) in its attendance boundary (Enterprise API level only) (optional)
    isInBoundaryOnly: true,
    // number | Search for districts within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) (optional)
    boxLatitudeNW: 1.2,
    // number | Search for districts within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) (optional)
    boxLongitudeNW: 1.2,
    // number | Search for districts within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) (optional)
    boxLatitudeSE: 1.2,
    // number | Search for districts within a \'box\' defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) (optional)
    boxLongitudeSE: 1.2,
    // number | Page number to retrieve (optional, default: 1) (optional)
    page: 56,
    // number | Number of districts to retrieve on a page (50 max) (optional, default: 10) (optional)
    perPage: 56,
    // string | Sort list. Values are: districtname, distance, rank. For descending order, precede with \'-\' i.e. -districtname (optional, default: districtname) (optional)
    sortBy: sortBy_example,
    // boolean | If sortBy is \'rank\', this boolean determines if districts with no rank are included in the result (optional, default: false) (optional)
    includeUnrankedDistrictsInRankSort: true,
  } satisfies SearchDistrictsRequest;

  try {
    const data = await api.searchDistricts(body);
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
| **st** | `string` | Two character state (e.g. \&#39;CA\&#39;) - optional if you supply a location search (nearLatitude/nearLongitude, boundaryAddress, or box coordinates); required otherwise. Location searches without \&#39;st\&#39; may return districts from multiple states. | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Search term - note: will match district name or city (optional) | [Optional] [Defaults to `undefined`] |
| **city** | `string` | Search for districts in this city (optional) | [Optional] [Defaults to `undefined`] |
| **zip** | `string` | Search for districts in this 5-digit zip code (optional) | [Optional] [Defaults to `undefined`] |
| **nearLatitude** | `number` | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. 44.982560) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.) | [Optional] [Defaults to `undefined`] |
| **nearLongitude** | `number` | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (e.g. -124.289185) (optional) (Pro, Enterprise API levels only. Enterprise API level will flag districts that include lat/long in its attendance boundary.) | [Optional] [Defaults to `undefined`] |
| **boundaryAddress** | `string` | Full U.S. address: flag returned districts that include this address in its attendance boundary. Example: \&#39;123 Main St. AnyTown CA 90001\&#39; (optional) (Enterprise API level only) | [Optional] [Defaults to `undefined`] |
| **distanceMiles** | `number` | Search for districts within (distanceMiles) of (nearLatitude)/(nearLongitude) (Default 50 miles) (optional) (Pro, Enterprise API levels only) | [Optional] [Defaults to `undefined`] |
| **isInBoundaryOnly** | `boolean` | Return only the districts that include given location (nearLatitude/nearLongitude) or (boundaryAddress) in its attendance boundary (Enterprise API level only) | [Optional] [Defaults to `undefined`] |
| **boxLatitudeNW** | `number` | Search for districts within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) | [Optional] [Defaults to `undefined`] |
| **boxLongitudeNW** | `number` | Search for districts within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) | [Optional] [Defaults to `undefined`] |
| **boxLatitudeSE** | `number` | Search for districts within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) | [Optional] [Defaults to `undefined`] |
| **boxLongitudeSE** | `number` | Search for districts within a \&#39;box\&#39; defined by (BoxLatitudeNW/BoxLongitudeNW) to (BoxLongitudeSE/BoxLatitudeSE) (optional) | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number to retrieve (optional, default: 1) | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Number of districts to retrieve on a page (50 max) (optional, default: 10) | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Sort list. Values are: districtname, distance, rank. For descending order, precede with \&#39;-\&#39; i.e. -districtname (optional, default: districtname) | [Optional] [Defaults to `undefined`] |
| **includeUnrankedDistrictsInRankSort** | `boolean` | If sortBy is \&#39;rank\&#39;, this boolean determines if districts with no rank are included in the result (optional, default: false) | [Optional] [Defaults to `undefined`] |

### Return type

[**APIDistrictList21**](APIDistrictList21.md)

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

