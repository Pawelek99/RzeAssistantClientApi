# KnowYourPlaceApi.InterestsApi

All URIs are relative to _/_

| Method                                                                     | HTTP request               | Description            |
| -------------------------------------------------------------------------- | -------------------------- | ---------------------- |
| [**interestControllerCreate**](InterestsApi.md#interestControllerCreate)   | **POST** /api/v1/interests | Creates a new interest |
| [**interestControllerFindAll**](InterestsApi.md#interestControllerFindAll) | **GET** /api/v1/interests  | Returns all interests  |

<a name="interestControllerCreate"></a>

# **interestControllerCreate**

> InlineResponse201 interestControllerCreate(body)

Creates a new interest

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.InterestsApi();
let body = new KnowYourPlaceApi.CreateInterestDto(); // CreateInterestDto |

apiInstance.interestControllerCreate(body, (error, data, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
});
```

### Parameters

| Name     | Type                                          | Description | Notes |
| -------- | --------------------------------------------- | ----------- | ----- |
| **body** | [**CreateInterestDto**](CreateInterestDto.md) |             |

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="interestControllerFindAll"></a>

# **interestControllerFindAll**

> [Interest] interestControllerFindAll()

Returns all interests

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.InterestsApi();
apiInstance.interestControllerFindAll((error, data, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Interest]**](Interest.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
