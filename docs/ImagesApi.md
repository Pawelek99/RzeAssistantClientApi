# KnowYourPlaceApi.ImagesApi

All URIs are relative to _/_

| Method                                                                                | HTTP request                     | Description                   |
| ------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------- |
| [**imageControllerCreate**](ImagesApi.md#imageControllerCreate)                       | **POST** /api/v1/images          | Uploads a new image           |
| [**imageControllerFindAllUploadedBy**](ImagesApi.md#imageControllerFindAllUploadedBy) | **GET** /api/v1/images/user/{id} | Returns all images by user id |
| [**imageControllerRemoveByLink**](ImagesApi.md#imageControllerRemoveByLink)           | **DELETE** /api/v1/images/{id}   | Removes an image              |
| [**imageDataControllerFindByLink**](ImagesApi.md#imageDataControllerFindByLink)       | **GET** /files/images/{id}       | Returns an image              |

<a name="imageControllerCreate"></a>

# **imageControllerCreate**

> InlineResponse2011 imageControllerCreate(fileuploadedBy)

Uploads a new image

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.ImagesApi();
let file = 'file_example'; // File |
let uploadedBy = 'uploadedBy_example'; // String |

apiInstance.imageControllerCreate(fileuploadedBy, (error, data, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
});
```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **file**       | **File**   |             |
| **uploadedBy** | **String** |             |

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="imageControllerFindAllUploadedBy"></a>

# **imageControllerFindAllUploadedBy**

> [InlineResponse2002] imageControllerFindAllUploadedBy(id)

Returns all images by user id

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.ImagesApi();
let id = 'id_example'; // String |

apiInstance.imageControllerFindAllUploadedBy(id, (error, data, response) => {
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

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="imageControllerRemoveByLink"></a>

# **imageControllerRemoveByLink**

> InlineResponse2001 imageControllerRemoveByLink(id)

Removes an image

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.ImagesApi();
let id = 'id_example'; // String |

apiInstance.imageControllerRemoveByLink(id, (error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="imageDataControllerFindByLink"></a>

# **imageDataControllerFindByLink**

> File imageDataControllerFindByLink(id)

Returns an image

### Example

```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ImagesApi();
let id = 'id_example'; // String |

apiInstance.imageDataControllerFindByLink(id, (error, data, response) => {
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

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/\_\*, application/json
