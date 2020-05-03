# rzeassistant_client_api

KnowYourPlaceApi - JavaScript client for rzeassistant_client_api
API do 'Aplikacja dla studentów zagranicznych'.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.1.1
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

```shell
yarn add rzeassistant_client_api --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import { ApiClient, ImagesApi } from 'rzeassistant_client_api';

const defaultClient = ApiClient.instance;

// Authorization header is required on all endpoints except `ImagesApi.imageDataControllerFindByLink`
const bearer = defaultClient.authentications['bearer'];
bearer.apiKey = "YOUR API KEY";

const api = new ImagesApi();

// Assuming we have created an input with possibility to upload file in the html file.
const fileField = document.querySelector('input[type="file"]');

fileField.onchange = e => {
  // Assuming we have chosen an image.
  api.imageControllerCreate(fileField.files[0], (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Image link: ${response.body.link}`);
    }
  });
}
```

## Documentation for Authorization

Authorization header is constructed from `client_name` and `client_secret` such that the result will look like this: `client_name,sha256('client_name,client_secret')`. `sha256` means function translating input string into hash using sha256 method.

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
*KnowYourPlaceApi.ArticlesApi* | [**articleControllerFindByPhrase**](docs/ArticlesApi.md#articleControllerFindByPhrase) | **GET** /api/v1/articles |        Returns a list of articles containing phrase in title, content, date or category.       If the phrase is empty, returns all articles.     
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
 - [KnowYourPlaceApi.InlineResponse200](docs/InlineResponse200.md)
 - [KnowYourPlaceApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [KnowYourPlaceApi.InlineResponse201](docs/InlineResponse201.md)
 - [KnowYourPlaceApi.InlineResponse2011](docs/InlineResponse2011.md)
 - [KnowYourPlaceApi.InlineResponse404](docs/InlineResponse404.md)
 - [KnowYourPlaceApi.InlineResponse4041](docs/InlineResponse4041.md)
 - [KnowYourPlaceApi.InlineResponse40410](docs/InlineResponse40410.md)
 - [KnowYourPlaceApi.InlineResponse40411](docs/InlineResponse40411.md)
 - [KnowYourPlaceApi.InlineResponse40412](docs/InlineResponse40412.md)
 - [KnowYourPlaceApi.InlineResponse4042](docs/InlineResponse4042.md)
 - [KnowYourPlaceApi.InlineResponse4043](docs/InlineResponse4043.md)
 - [KnowYourPlaceApi.InlineResponse4044](docs/InlineResponse4044.md)
 - [KnowYourPlaceApi.InlineResponse4045](docs/InlineResponse4045.md)
 - [KnowYourPlaceApi.InlineResponse4046](docs/InlineResponse4046.md)
 - [KnowYourPlaceApi.InlineResponse4047](docs/InlineResponse4047.md)
 - [KnowYourPlaceApi.InlineResponse4048](docs/InlineResponse4048.md)
 - [KnowYourPlaceApi.InlineResponse4049](docs/InlineResponse4049.md)
 - [KnowYourPlaceApi.Interest](docs/Interest.md)
 - [KnowYourPlaceApi.Notification](docs/Notification.md)
 - [KnowYourPlaceApi.Role](docs/Role.md)
 - [KnowYourPlaceApi.Theme](docs/Theme.md)
 - [KnowYourPlaceApi.UpdateArticleDto](docs/UpdateArticleDto.md)
 - [KnowYourPlaceApi.UpdateArticleRatingDto](docs/UpdateArticleRatingDto.md)
 - [KnowYourPlaceApi.UpdateClipboardDto](docs/UpdateClipboardDto.md)
 - [KnowYourPlaceApi.UploadImageDto](docs/UploadImageDto.md)
 - [KnowYourPlaceApi.User](docs/User.md)
