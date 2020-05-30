# KnowYourPlaceApi.BannedArticleApi

All URIs are relative to _/_

| Method                                                                                                       | HTTP request                       | Description                    |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ------------------------------ |
| [**bannedArticleControllerBanArticle**](BannedArticleApi.md#bannedArticleControllerBanArticle)               | **POST** /api/v1/bannedArticle     | Creates a new banned article   |
| [**bannedArticleControllerFindBannedArticle**](BannedArticleApi.md#bannedArticleControllerFindBannedArticle) | **GET** /api/v1/bannedArticle/{id} | Returns banned article details |

<a name="bannedArticleControllerBanArticle"></a>

# **bannedArticleControllerBanArticle**

> InlineResponse201 bannedArticleControllerBanArticle(body)

Creates a new banned article

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.BannedArticleApi();
let body = new KnowYourPlaceApi.CreateBannedArticleDto(); // CreateBannedArticleDto |

apiInstance.bannedArticleControllerBanArticle(body, (error, data, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
});
```

### Parameters

| Name     | Type                                                    | Description | Notes |
| -------- | ------------------------------------------------------- | ----------- | ----- |
| **body** | [**CreateBannedArticleDto**](CreateBannedArticleDto.md) |             |

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="bannedArticleControllerFindBannedArticle"></a>

# **bannedArticleControllerFindBannedArticle**

> BannedArticle bannedArticleControllerFindBannedArticle(id)

Returns banned article details

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.BannedArticleApi();
let id = 'id_example'; // String |

apiInstance.bannedArticleControllerFindBannedArticle(
	id,
	(error, data, response) => {
		if (error) {
			console.error(error);
		} else {
			console.log('API called successfully. Returned data: ' + data);
		}
	}
);
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **String** |             |

### Return type

[**BannedArticle**](BannedArticle.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
