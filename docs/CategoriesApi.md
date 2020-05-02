# KnowYourPlaceApi.CategoriesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryControllerCreate**](CategoriesApi.md#categoryControllerCreate) | **POST** /api/v1/categories | Creates a new category
[**categoryControllerFindAll**](CategoriesApi.md#categoryControllerFindAll) | **GET** /api/v1/categories | Returns all categories
[**categoryControllerFindById**](CategoriesApi.md#categoryControllerFindById) | **GET** /api/v1/categories/{id} | Returns a category with the given id
[**categoryControllerRemoveById**](CategoriesApi.md#categoryControllerRemoveById) | **DELETE** /api/v1/categories/{id} | Removes a category by the given id

<a name="categoryControllerCreate"></a>
# **categoryControllerCreate**
> InlineResponse201 categoryControllerCreate(body)

Creates a new category

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.CategoriesApi();
let body = new KnowYourPlaceApi.CreateCategoryDto(); // CreateCategoryDto | 

apiInstance.categoryControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateCategoryDto**](CreateCategoryDto.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoryControllerFindAll"></a>
# **categoryControllerFindAll**
> [Category] categoryControllerFindAll()

Returns all categories

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.CategoriesApi();
apiInstance.categoryControllerFindAll((error, data, response) => {
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

[**[Category]**](Category.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoryControllerFindById"></a>
# **categoryControllerFindById**
> Category categoryControllerFindById(id)

Returns a category with the given id

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.CategoriesApi();
let id = "id_example"; // String | 

apiInstance.categoryControllerFindById(id, (error, data, response) => {
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

[**Category**](Category.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoryControllerRemoveById"></a>
# **categoryControllerRemoveById**
> InlineResponse2001 categoryControllerRemoveById(id)

Removes a category by the given id

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.CategoriesApi();
let id = "id_example"; // String | 

apiInstance.categoryControllerRemoveById(id, (error, data, response) => {
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

