# KnowYourPlaceApi.NotificationsApi

All URIs are relative to *http://pointlessapps.tech:3001*

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

No authorization required

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

