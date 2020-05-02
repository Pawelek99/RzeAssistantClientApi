# KnowYourPlaceApi.NotificationsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificationControllerCreate**](NotificationsApi.md#notificationControllerCreate) | **POST** /api/v1/notifications | Creates a new notification
[**notificationControllerFindByUserId**](NotificationsApi.md#notificationControllerFindByUserId) | **GET** /api/v1/notifications/user/{id} | Returns a list of all notifications by the given user id

<a name="notificationControllerCreate"></a>
# **notificationControllerCreate**
> InlineResponse201 notificationControllerCreate(body)

Creates a new notification

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.NotificationsApi();
let body = new KnowYourPlaceApi.CreateNotificationDto(); // CreateNotificationDto | 

apiInstance.notificationControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateNotificationDto**](CreateNotificationDto.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="notificationControllerFindByUserId"></a>
# **notificationControllerFindByUserId**
> [Notification] notificationControllerFindByUserId(id)

Returns a list of all notifications by the given user id

### Example
```javascript
import KnowYourPlaceApi from 'know_your_place_api';
let defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new KnowYourPlaceApi.NotificationsApi();
let id = "id_example"; // String | 

apiInstance.notificationControllerFindByUserId(id, (error, data, response) => {
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

[**[Notification]**](Notification.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

