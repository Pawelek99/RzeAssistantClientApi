# rzeassistant_client_api

KnowYourPlaceApi - JavaScript client for rzeassistant_client_api
API do 'Aplikacja dla studentów zagranicznych'.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.2.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

Install it via:

```shell
npm install rzeassistant_client_api --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KnowYourPlaceApi = require('rzeassistant_client_api');
var defaultClient = KnowYourPlaceApi.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new KnowYourPlaceApi.ArticlesApi()
var body = new KnowYourPlaceApi.CreateArticleDto(); // {CreateArticleDto}

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.articleControllerCreate(body, callback);
```

## Documentation for Authorization

### bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KnowYourPlaceApi.ArticlesApi* | [**articleControllerCreate**](docs/ArticlesApi.md#articleControllerCreate) | **POST** /api/v1/articles | Creates a new article
*KnowYourPlaceApi.ArticlesApi* | [**articleControllerFindById**](docs/ArticlesApi.md#articleControllerFindById) | **GET** /api/v1/articles/{id} | Returns an article by id
*KnowYourPlaceApi.ArticlesApi* | [**articleControllerFindByPhrase**](docs/ArticlesApi.md#articleControllerFindByPhrase) | **GET** /api/v1/articles | Returns a list of articles containing phrase in the title, content, author or category. If the phrase is empty, returns all articles.
*KnowYourPlaceApi.ArticlesApi* | [**articleControllerUpdate**](docs/ArticlesApi.md#articleControllerUpdate) | **POST** /api/v1/articles/{id} | Updates an article by id
*KnowYourPlaceApi.ArticlesApi* | [**articleControllerUpdateDislikesById**](docs/ArticlesApi.md#articleControllerUpdateDislikesById) | **POST** /api/v1/articles/{id}/dislikes | Updates dislike count of the article
*KnowYourPlaceApi.ArticlesApi* | [**articleControllerUpdateLikesById**](docs/ArticlesApi.md#articleControllerUpdateLikesById) | **POST** /api/v1/articles/{id}/likes | Updates like count of the article
*KnowYourPlaceApi.BannedArticleApi* | [**bannedArticleControllerBanArticle**](docs/BannedArticleApi.md#bannedArticleControllerBanArticle) | **POST** /api/v1/bannedArticle | Creates a new banned article
*KnowYourPlaceApi.BannedArticleApi* | [**bannedArticleControllerFindBannedArticle**](docs/BannedArticleApi.md#bannedArticleControllerFindBannedArticle) | **GET** /api/v1/bannedArticle/{id} | Returns banned article details
*KnowYourPlaceApi.BannedUserApi* | [**bannedUserControllerBanUser**](docs/BannedUserApi.md#bannedUserControllerBanUser) | **POST** /api/v1/bannedUser | Creates a new banned user
*KnowYourPlaceApi.BannedUserApi* | [**bannedUserControllerFindBannedUser**](docs/BannedUserApi.md#bannedUserControllerFindBannedUser) | **GET** /api/v1/bannedUser/{id} | Returns banned user details
*KnowYourPlaceApi.CategoriesApi* | [**categoryControllerCreate**](docs/CategoriesApi.md#categoryControllerCreate) | **POST** /api/v1/categories | Creates a new category
*KnowYourPlaceApi.CategoriesApi* | [**categoryControllerFindAll**](docs/CategoriesApi.md#categoryControllerFindAll) | **GET** /api/v1/categories | Returns all categories
*KnowYourPlaceApi.CategoriesApi* | [**categoryControllerFindById**](docs/CategoriesApi.md#categoryControllerFindById) | **GET** /api/v1/categories/{id} | Returns a category with the given id
*KnowYourPlaceApi.CategoriesApi* | [**categoryControllerRemoveById**](docs/CategoriesApi.md#categoryControllerRemoveById) | **DELETE** /api/v1/categories/{id} | Removes a category by the given id
*KnowYourPlaceApi.ClipboardsApi* | [**clipboardControllerAddArticleById**](docs/ClipboardsApi.md#clipboardControllerAddArticleById) | **POST** /api/v1/clipboards/{id}/add | Adds a article to the clipboard
*KnowYourPlaceApi.ClipboardsApi* | [**clipboardControllerCreate**](docs/ClipboardsApi.md#clipboardControllerCreate) | **POST** /api/v1/clipboards | Creates a new clipboard
*KnowYourPlaceApi.ClipboardsApi* | [**clipboardControllerFindById**](docs/ClipboardsApi.md#clipboardControllerFindById) | **GET** /api/v1/clipboards/{id} | Returns a clipboard by id
*KnowYourPlaceApi.ClipboardsApi* | [**clipboardControllerRemoveArticleById**](docs/ClipboardsApi.md#clipboardControllerRemoveArticleById) | **POST** /api/v1/clipboards/{id}/remove | Removes a article from the clipboard
*KnowYourPlaceApi.ClipboardsApi* | [**clipboardControllerRemoveById**](docs/ClipboardsApi.md#clipboardControllerRemoveById) | **DELETE** /api/v1/clipboards/{id} | Removes a clipboard by id
*KnowYourPlaceApi.CommentsApi* | [**commentControllerCreate**](docs/CommentsApi.md#commentControllerCreate) | **POST** /api/v1/comments | Creates a new comment
*KnowYourPlaceApi.CommentsApi* | [**commentControllerFindByArticleId**](docs/CommentsApi.md#commentControllerFindByArticleId) | **GET** /api/v1/comments/article/{id} | Returns all comments by the given article id
*KnowYourPlaceApi.CommentsApi* | [**commentControllerFindByAuthorId**](docs/CommentsApi.md#commentControllerFindByAuthorId) | **GET** /api/v1/comments/user/{id} | Returns all comments by the given user id
*KnowYourPlaceApi.ImagesApi* | [**imageControllerCreate**](docs/ImagesApi.md#imageControllerCreate) | **POST** /api/v1/images | Uploads a new image
*KnowYourPlaceApi.ImagesApi* | [**imageControllerFindAllUploadedBy**](docs/ImagesApi.md#imageControllerFindAllUploadedBy) | **GET** /api/v1/images/user/{id} | Returns all images by user id
*KnowYourPlaceApi.ImagesApi* | [**imageControllerRemoveByLink**](docs/ImagesApi.md#imageControllerRemoveByLink) | **DELETE** /api/v1/images/{id} | Removes an image
*KnowYourPlaceApi.ImagesApi* | [**imageDataControllerFindByLink**](docs/ImagesApi.md#imageDataControllerFindByLink) | **GET** /files/images/{id} | Returns an image
*KnowYourPlaceApi.InterestsApi* | [**interestControllerCreate**](docs/InterestsApi.md#interestControllerCreate) | **POST** /api/v1/interests | Creates a new interest
*KnowYourPlaceApi.InterestsApi* | [**interestControllerFindAll**](docs/InterestsApi.md#interestControllerFindAll) | **GET** /api/v1/interests | Returns all interests
*KnowYourPlaceApi.NotificationsApi* | [**notificationControllerCreate**](docs/NotificationsApi.md#notificationControllerCreate) | **POST** /api/v1/notifications | Creates a new notification
*KnowYourPlaceApi.NotificationsApi* | [**notificationControllerFindByUserId**](docs/NotificationsApi.md#notificationControllerFindByUserId) | **GET** /api/v1/notifications/user/{id} | Returns a list of all notifications by the given user id
*KnowYourPlaceApi.UsersApi* | [**userControllerCreate**](docs/UsersApi.md#userControllerCreate) | **POST** /api/v1/users | Creates new user
*KnowYourPlaceApi.UsersApi* | [**userControllerFindById**](docs/UsersApi.md#userControllerFindById) | **GET** /api/v1/users/{id} | Returns user details by id

## Documentation for Models

 - [KnowYourPlaceApi.AllOfArticleAuthor](docs/AllOfArticleAuthor.md)
 - [KnowYourPlaceApi.AllOfArticleCategory](docs/AllOfArticleCategory.md)
 - [KnowYourPlaceApi.AllOfBannedArticleArticle](docs/AllOfBannedArticleArticle.md)
 - [KnowYourPlaceApi.AllOfBannedUserUser](docs/AllOfBannedUserUser.md)
 - [KnowYourPlaceApi.AllOfClipboardUser](docs/AllOfClipboardUser.md)
 - [KnowYourPlaceApi.AllOfCommentArticle](docs/AllOfCommentArticle.md)
 - [KnowYourPlaceApi.AllOfCommentAuthor](docs/AllOfCommentAuthor.md)
 - [KnowYourPlaceApi.AllOfImageUploadedBy](docs/AllOfImageUploadedBy.md)
 - [KnowYourPlaceApi.AllOfNotificationRecipient](docs/AllOfNotificationRecipient.md)
 - [KnowYourPlaceApi.AllOfNotificationSender](docs/AllOfNotificationSender.md)
 - [KnowYourPlaceApi.AllOfUserInterest](docs/AllOfUserInterest.md)
 - [KnowYourPlaceApi.AllOfUserRole](docs/AllOfUserRole.md)
 - [KnowYourPlaceApi.AllOfUserTheme](docs/AllOfUserTheme.md)
 - [KnowYourPlaceApi.Article](docs/Article.md)
 - [KnowYourPlaceApi.BannedArticle](docs/BannedArticle.md)
 - [KnowYourPlaceApi.BannedUser](docs/BannedUser.md)
 - [KnowYourPlaceApi.Category](docs/Category.md)
 - [KnowYourPlaceApi.Clipboard](docs/Clipboard.md)
 - [KnowYourPlaceApi.Comment](docs/Comment.md)
 - [KnowYourPlaceApi.CreateArticleDto](docs/CreateArticleDto.md)
 - [KnowYourPlaceApi.CreateBannedArticleDto](docs/CreateBannedArticleDto.md)
 - [KnowYourPlaceApi.CreateBannedUserDto](docs/CreateBannedUserDto.md)
 - [KnowYourPlaceApi.CreateCategoryDto](docs/CreateCategoryDto.md)
 - [KnowYourPlaceApi.CreateClipboardDto](docs/CreateClipboardDto.md)
 - [KnowYourPlaceApi.CreateCommentDto](docs/CreateCommentDto.md)
 - [KnowYourPlaceApi.CreateInterestDto](docs/CreateInterestDto.md)
 - [KnowYourPlaceApi.CreateNotificationDto](docs/CreateNotificationDto.md)
 - [KnowYourPlaceApi.CreateUserDto](docs/CreateUserDto.md)
 - [KnowYourPlaceApi.Image](docs/Image.md)
 - [KnowYourPlaceApi.Interest](docs/Interest.md)
 - [KnowYourPlaceApi.Notification](docs/Notification.md)
 - [KnowYourPlaceApi.Role](docs/Role.md)
 - [KnowYourPlaceApi.Theme](docs/Theme.md)
 - [KnowYourPlaceApi.UpdateArticleDto](docs/UpdateArticleDto.md)
 - [KnowYourPlaceApi.UpdateArticleRatingDto](docs/UpdateArticleRatingDto.md)
 - [KnowYourPlaceApi.UpdateClipboardDto](docs/UpdateClipboardDto.md)
 - [KnowYourPlaceApi.UploadImageDto](docs/UploadImageDto.md)
 - [KnowYourPlaceApi.User](docs/User.md)
