# RankingsApi

All URIs are relative to *https://api.schooldigger.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDistrictRankings**](RankingsApi.md#getdistrictrankings) | **GET** /v2.4/rankings/districts/{st} | Returns a SchoolDigger district ranking list |
| [**getSchoolRankings**](RankingsApi.md#getschoolrankings) | **GET** /v2.4/rankings/schools/{st} | Returns a SchoolDigger school ranking list |



## getDistrictRankings

> APIDistrictListRank21 getDistrictRankings(st, year, page, perPage)

Returns a SchoolDigger district ranking list

### Example

```ts
import {
  Configuration,
  RankingsApi,
} from 'schooldigger';
import type { GetDistrictRankingsRequest } from 'schooldigger';

async function example() {
  console.log("🚀 Testing schooldigger SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: appID
    apiKey: "YOUR API KEY",
    // To configure API key authorization: appKey
    apiKey: "YOUR API KEY",
  });
  const api = new RankingsApi(config);

  const body = {
    // string | Two character state (e.g. \'CA\')
    st: st_example,
    // number | The ranking year (leave blank for most recent year) (optional)
    year: 56,
    // number | Page number to retrieve (optional, default: 1) (optional)
    page: 56,
    // number | Number of districts to retrieve on a page (50 max) (optional, default: 10) (optional)
    perPage: 56,
  } satisfies GetDistrictRankingsRequest;

  try {
    const data = await api.getDistrictRankings(body);
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
| **st** | `string` | Two character state (e.g. \&#39;CA\&#39;) | [Defaults to `undefined`] |
| **year** | `number` | The ranking year (leave blank for most recent year) | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number to retrieve (optional, default: 1) | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Number of districts to retrieve on a page (50 max) (optional, default: 10) | [Optional] [Defaults to `undefined`] |

### Return type

[**APIDistrictListRank21**](APIDistrictListRank21.md)

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


## getSchoolRankings

> APISchoolListRank21 getSchoolRankings(st, year, level, page, perPage)

Returns a SchoolDigger school ranking list

### Example

```ts
import {
  Configuration,
  RankingsApi,
} from 'schooldigger';
import type { GetSchoolRankingsRequest } from 'schooldigger';

async function example() {
  console.log("🚀 Testing schooldigger SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: appID
    apiKey: "YOUR API KEY",
    // To configure API key authorization: appKey
    apiKey: "YOUR API KEY",
  });
  const api = new RankingsApi(config);

  const body = {
    // string | Two character state (e.g. \'CA\')
    st: st_example,
    // number | The ranking year (leave blank for most recent year) (optional)
    year: 56,
    // string | Level of ranking: \'Elementary\', \'Middle\', or \'High\' (optional)
    level: level_example,
    // number | Page number to retrieve (optional, default: 1) (optional)
    page: 56,
    // number | Number of schools to retrieve on a page (50 max) (optional, default: 10) (optional)
    perPage: 56,
  } satisfies GetSchoolRankingsRequest;

  try {
    const data = await api.getSchoolRankings(body);
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
| **st** | `string` | Two character state (e.g. \&#39;CA\&#39;) | [Defaults to `undefined`] |
| **year** | `number` | The ranking year (leave blank for most recent year) | [Optional] [Defaults to `undefined`] |
| **level** | `string` | Level of ranking: \&#39;Elementary\&#39;, \&#39;Middle\&#39;, or \&#39;High\&#39; | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number to retrieve (optional, default: 1) | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | Number of schools to retrieve on a page (50 max) (optional, default: 10) | [Optional] [Defaults to `undefined`] |

### Return type

[**APISchoolListRank21**](APISchoolListRank21.md)

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

