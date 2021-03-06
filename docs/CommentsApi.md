# KnowYourPlaceApi.CommentsApi

All URIs are relative to _/_

| Method                                                                                  | HTTP request                          | Description                                  |
| --------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------------- |
| [**commentControllerCreate**](CommentsApi.md#commentControllerCreate)                   | **POST** /api/v1/comments             | Creates a new comment                        |
| [**commentControllerFindByArticleId**](CommentsApi.md#commentControllerFindByArticleId) | **GET** /api/v1/comments/article/{id} | Returns all comments by the given article id |
| [**commentControllerFindByAuthorId**](CommentsApi.md#commentControllerFindByAuthorId)   | **GET** /api/v1/comments/user/{id}    | Returns all comments by the given user id    |

<a name="commentControllerCreate"></a>

# **commentControllerCreate**

> InlineResponse201 commentControllerCreate(body)

Creates a new comment

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.CommentsApi();
let body = new KnowYourPlaceApi.CreateCommentDto(); // CreateCommentDto |

apiInstance.commentControllerCreate(body, (error, data, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
});
```

### Parameters

| Name     | Type                                        | Description | Notes |
| -------- | ------------------------------------------- | ----------- | ----- |
| **body** | [**CreateCommentDto**](CreateCommentDto.md) |             |

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="commentControllerFindByArticleId"></a>

# **commentControllerFindByArticleId**

> [Comment] commentControllerFindByArticleId(id)

Returns all comments by the given article id

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.CommentsApi();
let id = 'id_example'; // String |

apiInstance.commentControllerFindByArticleId(id, (error, data, response) => {
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

[**[Comment]**](Comment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="commentControllerFindByAuthorId"></a>

# **commentControllerFindByAuthorId**

> [Comment] commentControllerFindByAuthorId(id)

Returns all comments by the given user id

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.CommentsApi();
let id = 'id_example'; // String |

apiInstance.commentControllerFindByAuthorId(id, (error, data, response) => {
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

[**[Comment]**](Comment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
