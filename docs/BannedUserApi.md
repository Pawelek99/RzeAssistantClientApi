# KnowYourPlaceApi.BannedUserApi

All URIs are relative to _/_

| Method                                                                                        | HTTP request                    | Description                 |
| --------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------- |
| [**bannedUserControllerBanUser**](BannedUserApi.md#bannedUserControllerBanUser)               | **POST** /api/v1/bannedUser     | Creates a new banned user   |
| [**bannedUserControllerFindBannedUser**](BannedUserApi.md#bannedUserControllerFindBannedUser) | **GET** /api/v1/bannedUser/{id} | Returns banned user details |

<a name="bannedUserControllerBanUser"></a>

# **bannedUserControllerBanUser**

> InlineResponse201 bannedUserControllerBanUser(body)

Creates a new banned user

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.BannedUserApi();
let body = new KnowYourPlaceApi.CreateBannedUserDto(); // CreateBannedUserDto |

apiInstance.bannedUserControllerBanUser(body, (error, data, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
});
```

### Parameters

| Name     | Type                                              | Description | Notes |
| -------- | ------------------------------------------------- | ----------- | ----- |
| **body** | [**CreateBannedUserDto**](CreateBannedUserDto.md) |             |

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="bannedUserControllerFindBannedUser"></a>

# **bannedUserControllerFindBannedUser**

> BannedUser bannedUserControllerFindBannedUser(id)

Returns banned user details

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.BannedUserApi();
let id = 'id_example'; // String |

apiInstance.bannedUserControllerFindBannedUser(id, (error, data, response) => {
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

[**BannedUser**](BannedUser.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
