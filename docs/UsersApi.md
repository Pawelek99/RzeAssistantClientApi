# KnowYourPlaceApi.UsersApi

All URIs are relative to _/_

| Method                                                           | HTTP request               | Description                |
| ---------------------------------------------------------------- | -------------------------- | -------------------------- |
| [**userControllerCreate**](UsersApi.md#userControllerCreate)     | **POST** /api/v1/users     | Creates new user           |
| [**userControllerFindById**](UsersApi.md#userControllerFindById) | **GET** /api/v1/users/{id} | Returns user details by id |

<a name="userControllerCreate"></a>

# **userControllerCreate**

> InlineResponse200 userControllerCreate(body)

Creates new user

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.UsersApi();
let body = new KnowYourPlaceApi.CreateUserDto(); // CreateUserDto |

apiInstance.userControllerCreate(body, (error, data, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
});
```

### Parameters

| Name     | Type                                  | Description | Notes |
| -------- | ------------------------------------- | ----------- | ----- |
| **body** | [**CreateUserDto**](CreateUserDto.md) |             |

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userControllerFindById"></a>

# **userControllerFindById**

> User userControllerFindById(id)

Returns user details by id

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.UsersApi();
let id = 'id_example'; // String |

apiInstance.userControllerFindById(id, (error, data, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
});
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **String** |             |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
