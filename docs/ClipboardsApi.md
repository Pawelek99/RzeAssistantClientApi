# KnowYourPlaceApi.ClipboardsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clipboardControllerAddArticleById**](ClipboardsApi.md#clipboardControllerAddArticleById) | **POST** /api/v1/clipboards/{id}/add | Adds a article to the clipboard
[**clipboardControllerCreate**](ClipboardsApi.md#clipboardControllerCreate) | **POST** /api/v1/clipboards | Creates a new clipboard
[**clipboardControllerFindById**](ClipboardsApi.md#clipboardControllerFindById) | **GET** /api/v1/clipboards/{id} | Returns a clipboard by id
[**clipboardControllerRemoveArticleById**](ClipboardsApi.md#clipboardControllerRemoveArticleById) | **POST** /api/v1/clipboards/{id}/remove | Removes a article from the clipboard
[**clipboardControllerRemoveById**](ClipboardsApi.md#clipboardControllerRemoveById) | **DELETE** /api/v1/clipboards/{id} | Removes a clipboard by id

<a name="clipboardControllerAddArticleById"></a>
# **clipboardControllerAddArticleById**
> Clipboard clipboardControllerAddArticleById(bodyid)

Adds a article to the clipboard

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.ClipboardsApi();
let body = new KnowYourPlaceApi.UpdateClipboardDto(); // UpdateClipboardDto | 
let id = "id_example"; // String | 

apiInstance.clipboardControllerAddArticleById(bodyid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateClipboardDto**](UpdateClipboardDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**Clipboard**](Clipboard.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clipboardControllerCreate"></a>
# **clipboardControllerCreate**
> InlineResponse201 clipboardControllerCreate(body)

Creates a new clipboard

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.ClipboardsApi();
let body = new KnowYourPlaceApi.CreateClipboardDto(); // CreateClipboardDto | 

apiInstance.clipboardControllerCreate(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateClipboardDto**](CreateClipboardDto.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clipboardControllerFindById"></a>
# **clipboardControllerFindById**
> Clipboard clipboardControllerFindById(id)

Returns a clipboard by id

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.ClipboardsApi();
let id = "id_example"; // String | 

apiInstance.clipboardControllerFindById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Clipboard**](Clipboard.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clipboardControllerRemoveArticleById"></a>
# **clipboardControllerRemoveArticleById**
> Clipboard clipboardControllerRemoveArticleById(bodyid)

Removes a article from the clipboard

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.ClipboardsApi();
let body = new KnowYourPlaceApi.UpdateClipboardDto(); // UpdateClipboardDto | 
let id = "id_example"; // String | 

apiInstance.clipboardControllerRemoveArticleById(bodyid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateClipboardDto**](UpdateClipboardDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**Clipboard**](Clipboard.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clipboardControllerRemoveById"></a>
# **clipboardControllerRemoveById**
> InlineResponse2001 clipboardControllerRemoveById(id)

Removes a clipboard by id

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.ClipboardsApi();
let id = "id_example"; // String | 

apiInstance.clipboardControllerRemoveById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

