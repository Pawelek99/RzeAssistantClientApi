# rzeassistant_client_api

KnowYourPlaceApi - JavaScript client for rzeassistant_client_api
API do 'Aplikacja dla studentów zagranicznych'.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 0.2.5
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
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new KnowYourPlaceApi.ArticlesApi();
var body = new KnowYourPlaceApi.CreateArticleDto(); // {CreateArticleDto}

var callback = function (error, data, response) {
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

All URIs are relative to _/_

| Class                               | Method                                                                                                                           | HTTP request                                  | Description                                                                                                                                                                                  |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _KnowYourPlaceApi.ArticlesApi_      | [**articleControllerCreate**](docs/ArticlesApi.md#articleControllerCreate)                                                       | **POST** /api/v1/articles                     | Creates a new article                                                                                                                                                                        |
| _KnowYourPlaceApi.ArticlesApi_      | [**articleControllerFindAll**](docs/ArticlesApi.md#articleControllerFindAll)                                                     | **GET** /api/v1/articles                      | Returns a list of articles containing phrase in the title, content, author or category, ordered by orderBy and limited to limit.If the phrase and the limit are empty, returns all articles. |
| _KnowYourPlaceApi.ArticlesApi_      | [**articleControllerFindById**](docs/ArticlesApi.md#articleControllerFindById)                                                   | **GET** /api/v1/articles/{id}                 | Returns an article by id                                                                                                                                                                     |
| _KnowYourPlaceApi.ArticlesApi_      | [**articleControllerUpdate**](docs/ArticlesApi.md#articleControllerUpdate)                                                       | **POST** /api/v1/articles/{id}                | Updates an article by id                                                                                                                                                                     |
| _KnowYourPlaceApi.ArticlesApi_      | [**articleControllerUpdateDislikesById**](docs/ArticlesApi.md#articleControllerUpdateDislikesById)                               | **POST** /api/v1/articles/{id}/dislikes       | Updates dislike count of the article                                                                                                                                                         |
| _KnowYourPlaceApi.ArticlesApi_      | [**articleControllerUpdateLikesById**](docs/ArticlesApi.md#articleControllerUpdateLikesById)                                     | **POST** /api/v1/articles/{id}/likes          | Updates like count of the article                                                                                                                                                            |
| _KnowYourPlaceApi.BannedArticleApi_ | [**bannedArticleControllerBanArticle**](docs/BannedArticleApi.md#bannedArticleControllerBanArticle)                              | **POST** /api/v1/bannedArticle                | Creates a new banned article                                                                                                                                                                 |
| _KnowYourPlaceApi.BannedArticleApi_ | [**bannedArticleControllerFindBannedArticle**](docs/BannedArticleApi.md#bannedArticleControllerFindBannedArticle)                | **GET** /api/v1/bannedArticle/{id}            | Returns banned article details                                                                                                                                                               |
| _KnowYourPlaceApi.BannedUserApi_    | [**bannedUserControllerBanUser**](docs/BannedUserApi.md#bannedUserControllerBanUser)                                             | **POST** /api/v1/bannedUser                   | Creates a new banned user                                                                                                                                                                    |
| _KnowYourPlaceApi.BannedUserApi_    | [**bannedUserControllerFindBannedUser**](docs/BannedUserApi.md#bannedUserControllerFindBannedUser)                               | **GET** /api/v1/bannedUser/{id}               | Returns banned user details                                                                                                                                                                  |
| _KnowYourPlaceApi.CategoriesApi_    | [**categoryControllerCreate**](docs/CategoriesApi.md#categoryControllerCreate)                                                   | **POST** /api/v1/categories                   | Creates a new category                                                                                                                                                                       |
| _KnowYourPlaceApi.CategoriesApi_    | [**categoryControllerFindAll**](docs/CategoriesApi.md#categoryControllerFindAll)                                                 | **GET** /api/v1/categories                    | Returns all categories                                                                                                                                                                       |
| _KnowYourPlaceApi.CategoriesApi_    | [**categoryControllerFindById**](docs/CategoriesApi.md#categoryControllerFindById)                                               | **GET** /api/v1/categories/{id}               | Returns a category with the given id                                                                                                                                                         |
| _KnowYourPlaceApi.CategoriesApi_    | [**categoryControllerRemoveById**](docs/CategoriesApi.md#categoryControllerRemoveById)                                           | **DELETE** /api/v1/categories/{id}            | Removes a category by the given id                                                                                                                                                           |
| _KnowYourPlaceApi.ClipboardsApi_    | [**clipboardControllerAddArticleById**](docs/ClipboardsApi.md#clipboardControllerAddArticleById)                                 | **POST** /api/v1/clipboards/{id}/add          | Adds a article to the clipboard                                                                                                                                                              |
| _KnowYourPlaceApi.ClipboardsApi_    | [**clipboardControllerCreate**](docs/ClipboardsApi.md#clipboardControllerCreate)                                                 | **POST** /api/v1/clipboards                   | Creates a new clipboard                                                                                                                                                                      |
| _KnowYourPlaceApi.ClipboardsApi_    | [**clipboardControllerFindById**](docs/ClipboardsApi.md#clipboardControllerFindById)                                             | **GET** /api/v1/clipboards/{id}               | Returns a clipboard by id                                                                                                                                                                    |
| _KnowYourPlaceApi.ClipboardsApi_    | [**clipboardControllerFindClipboardByUserId**](docs/ClipboardsApi.md#clipboardControllerFindClipboardByUserId)                   | **GET** /api/v1/clipboards/user/{id}          | Returns clipboard associated with the given user                                                                                                                                             |
| _KnowYourPlaceApi.ClipboardsApi_    | [**clipboardControllerRemoveArticleById**](docs/ClipboardsApi.md#clipboardControllerRemoveArticleById)                           | **POST** /api/v1/clipboards/{id}/remove       | Removes a article from the clipboard                                                                                                                                                         |
| _KnowYourPlaceApi.ClipboardsApi_    | [**clipboardControllerRemoveById**](docs/ClipboardsApi.md#clipboardControllerRemoveById)                                         | **DELETE** /api/v1/clipboards/{id}            | Removes a clipboard by id                                                                                                                                                                    |
| _KnowYourPlaceApi.ClipboardsApi_    | [**clipboardControllerUserClipboardContainsArticleId**](docs/ClipboardsApi.md#clipboardControllerUserClipboardContainsArticleId) | **GET** /api/v1/clipboards/user/{id}/contains | Checks if user&#x27;s clipboard contains the given article                                                                                                                                   |
| _KnowYourPlaceApi.CommentsApi_      | [**commentControllerCreate**](docs/CommentsApi.md#commentControllerCreate)                                                       | **POST** /api/v1/comments                     | Creates a new comment                                                                                                                                                                        |
| _KnowYourPlaceApi.CommentsApi_      | [**commentControllerFindByArticleId**](docs/CommentsApi.md#commentControllerFindByArticleId)                                     | **GET** /api/v1/comments/article/{id}         | Returns all comments by the given article id                                                                                                                                                 |
| _KnowYourPlaceApi.CommentsApi_      | [**commentControllerFindByAuthorId**](docs/CommentsApi.md#commentControllerFindByAuthorId)                                       | **GET** /api/v1/comments/user/{id}            | Returns all comments by the given user id                                                                                                                                                    |
| _KnowYourPlaceApi.ImagesApi_        | [**imageControllerCreate**](docs/ImagesApi.md#imageControllerCreate)                                                             | **POST** /api/v1/images                       | Uploads a new image                                                                                                                                                                          |
| _KnowYourPlaceApi.ImagesApi_        | [**imageControllerFindAllUploadedBy**](docs/ImagesApi.md#imageControllerFindAllUploadedBy)                                       | **GET** /api/v1/images/user/{id}              | Returns all images by user id                                                                                                                                                                |
| _KnowYourPlaceApi.ImagesApi_        | [**imageControllerRemoveByLink**](docs/ImagesApi.md#imageControllerRemoveByLink)                                                 | **DELETE** /api/v1/images/{id}                | Removes an image                                                                                                                                                                             |
| _KnowYourPlaceApi.ImagesApi_        | [**imageDataControllerFindByLink**](docs/ImagesApi.md#imageDataControllerFindByLink)                                             | **GET** /files/images/{id}                    | Returns an image                                                                                                                                                                             |
| _KnowYourPlaceApi.InterestsApi_     | [**interestControllerCreate**](docs/InterestsApi.md#interestControllerCreate)                                                    | **POST** /api/v1/interests                    | Creates a new interest                                                                                                                                                                       |
| _KnowYourPlaceApi.InterestsApi_     | [**interestControllerFindAll**](docs/InterestsApi.md#interestControllerFindAll)                                                  | **GET** /api/v1/interests                     | Returns all interests                                                                                                                                                                        |
| _KnowYourPlaceApi.NotificationsApi_ | [**notificationControllerCreate**](docs/NotificationsApi.md#notificationControllerCreate)                                        | **POST** /api/v1/notifications                | Creates a new notification                                                                                                                                                                   |
| _KnowYourPlaceApi.NotificationsApi_ | [**notificationControllerFindByUserId**](docs/NotificationsApi.md#notificationControllerFindByUserId)                            | **GET** /api/v1/notifications/user/{id}       | Returns a list of all notifications by the given user id                                                                                                                                     |
| _KnowYourPlaceApi.UsersApi_         | [**userControllerCreate**](docs/UsersApi.md#userControllerCreate)                                                                | **POST** /api/v1/users                        | Creates new user                                                                                                                                                                             |
| _KnowYourPlaceApi.UsersApi_         | [**userControllerFindById**](docs/UsersApi.md#userControllerFindById)                                                            | **GET** /api/v1/users/{id}                    | Returns user details by id                                                                                                                                                                   |
| _KnowYourPlaceApi.UsersApi_         | [**userControllerFindByPasswordHash**](docs/UsersApi.md#userControllerFindByPasswordHash)                                        | **GET** /api/v1/users/login/{hash}            | Returns user details by password hash                                                                                                                                                        |

## Documentation for Models

- [KnowYourPlaceApi.AllOfArticleAuthor](docs/AllOfArticleAuthor.md)
- [KnowYourPlaceApi.AllOfArticleCategory](docs/AllOfArticleCategory.md)
- [KnowYourPlaceApi.AllOfBannedArticleArticle](docs/AllOfBannedArticleArticle.md)
- [KnowYourPlaceApi.AllOfBannedUserUser](docs/AllOfBannedUserUser.md)
- [KnowYourPlaceApi.AllOfClipboardArticles](docs/AllOfClipboardArticles.md)
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
- [KnowYourPlaceApi.InlineResponse2002](docs/InlineResponse2002.md)
- [KnowYourPlaceApi.InlineResponse2003](docs/InlineResponse2003.md)
- [KnowYourPlaceApi.InlineResponse201](docs/InlineResponse201.md)
- [KnowYourPlaceApi.InlineResponse2011](docs/InlineResponse2011.md)
- [KnowYourPlaceApi.InlineResponse404](docs/InlineResponse404.md)
- [KnowYourPlaceApi.InlineResponse4041](docs/InlineResponse4041.md)
- [KnowYourPlaceApi.InlineResponse40410](docs/InlineResponse40410.md)
- [KnowYourPlaceApi.InlineResponse40411](docs/InlineResponse40411.md)
- [KnowYourPlaceApi.InlineResponse40412](docs/InlineResponse40412.md)
- [KnowYourPlaceApi.InlineResponse40413](docs/InlineResponse40413.md)
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
