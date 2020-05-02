# KnowYourPlaceApi.ImagesApi

All URIs are relative to *http://pointlessapps.tech:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageControllerCreate**](ImagesApi.md#imageControllerCreate) | **POST** /api/v1/images | Uploads a new image
[**imageControllerRemoveByLink**](ImagesApi.md#imageControllerRemoveByLink) | **DELETE** /api/v1/images/{id} | Removes an image
[**imageDataControllerFindByLink**](ImagesApi.md#imageDataControllerFindByLink) | **GET** /files/images/{id} | Returns an image

<a name="imageControllerCreate"></a>
# **imageControllerCreate**
> InlineResponse2011 imageControllerCreate(file)

Uploads a new image

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ImagesApi();
let file = file_example; // Blob | 

apiInstance.imageControllerCreate(file, (error, data, response) => {
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
 **file** | **Blob**|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="imageControllerRemoveByLink"></a>
# **imageControllerRemoveByLink**
> InlineResponse2001 imageControllerRemoveByLink(id)

Removes an image

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ImagesApi();
let id = "id_example"; // String | 

apiInstance.imageControllerRemoveByLink(id, (error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="imageDataControllerFindByLink"></a>
# **imageDataControllerFindByLink**
> &#x27;Blob&#x27; imageDataControllerFindByLink(id)

Returns an image

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ImagesApi();
let id = "id_example"; // String | 

apiInstance.imageDataControllerFindByLink(id, (error, data, response) => {
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

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/_*, application/json

