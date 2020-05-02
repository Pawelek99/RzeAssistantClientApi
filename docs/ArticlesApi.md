# KnowYourPlaceApi.ArticlesApi

All URIs are relative to *http://pointlessapps.tech:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articleControllerCreate**](ArticlesApi.md#articleControllerCreate) | **POST** /api/v1/articles | Creates a new article
[**articleControllerFindById**](ArticlesApi.md#articleControllerFindById) | **GET** /api/v1/articles/{id} | Returns an article by id
[**articleControllerFindByPhrase**](ArticlesApi.md#articleControllerFindByPhrase) | **GET** /api/v1/articles |        Returns a list of articles containing phrase in title, content, date or category.       If the phrase is empty, returns all articles.     
[**articleControllerUpdate**](ArticlesApi.md#articleControllerUpdate) | **POST** /api/v1/articles/{id} | Updates an article by id
[**articleControllerUpdateDislikesById**](ArticlesApi.md#articleControllerUpdateDislikesById) | **POST** /api/v1/articles/{id}/dislikes | Updates dislike count of the article
[**articleControllerUpdateLikesById**](ArticlesApi.md#articleControllerUpdateLikesById) | **POST** /api/v1/articles/{id}/likes | Updates like count of the article

<a name="articleControllerCreate"></a>
# **articleControllerCreate**
> InlineResponse201 articleControllerCreate(body)

Creates a new article

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ArticlesApi();
let body = new KnowYourPlaceApi.CreateArticleDto(); // CreateArticleDto | 

apiInstance.articleControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateArticleDto**](CreateArticleDto.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="articleControllerFindById"></a>
# **articleControllerFindById**
> Article articleControllerFindById(id)

Returns an article by id

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ArticlesApi();
let id = "id_example"; // String | 

apiInstance.articleControllerFindById(id, (error, data, response) => {
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

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="articleControllerFindByPhrase"></a>
# **articleControllerFindByPhrase**
> [Article] articleControllerFindByPhrase(phrase)

       Returns a list of articles containing phrase in title, content, date or category.       If the phrase is empty, returns all articles.     

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ArticlesApi();
let phrase = "phrase_example"; // String | 

apiInstance.articleControllerFindByPhrase(phrase, (error, data, response) => {
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
 **phrase** | **String**|  | 

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="articleControllerUpdate"></a>
# **articleControllerUpdate**
> Article articleControllerUpdate(bodyid)

Updates an article by id

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ArticlesApi();
let body = new KnowYourPlaceApi.UpdateArticleDto(); // UpdateArticleDto | 
let id = "id_example"; // String | 

apiInstance.articleControllerUpdate(bodyid, (error, data, response) => {
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
 **body** | [**UpdateArticleDto**](UpdateArticleDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="articleControllerUpdateDislikesById"></a>
# **articleControllerUpdateDislikesById**
> Article articleControllerUpdateDislikesById(bodyid)

Updates dislike count of the article

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ArticlesApi();
let body = new KnowYourPlaceApi.UpdateArticleRatingDto(); // UpdateArticleRatingDto | 
let id = "id_example"; // String | 

apiInstance.articleControllerUpdateDislikesById(bodyid, (error, data, response) => {
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
 **body** | [**UpdateArticleRatingDto**](UpdateArticleRatingDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="articleControllerUpdateLikesById"></a>
# **articleControllerUpdateLikesById**
> Article articleControllerUpdateLikesById(bodyid)

Updates like count of the article

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';

let apiInstance = new KnowYourPlaceApi.ArticlesApi();
let body = new KnowYourPlaceApi.UpdateArticleRatingDto(); // UpdateArticleRatingDto | 
let id = "id_example"; // String | 

apiInstance.articleControllerUpdateLikesById(bodyid, (error, data, response) => {
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
 **body** | [**UpdateArticleRatingDto**](UpdateArticleRatingDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

