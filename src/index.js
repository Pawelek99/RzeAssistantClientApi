/**
 * KnowYourPlace API
 * API do 'Aplikacja dla studentów zagranicznych'.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import AllOfArticleAuthor from './model/AllOfArticleAuthor';
import AllOfArticleCategory from './model/AllOfArticleCategory';
import AllOfBannedArticleArticle from './model/AllOfBannedArticleArticle';
import AllOfBannedUserUser from './model/AllOfBannedUserUser';
import AllOfClipboardUser from './model/AllOfClipboardUser';
import AllOfCommentArticle from './model/AllOfCommentArticle';
import AllOfCommentAuthor from './model/AllOfCommentAuthor';
import AllOfNotificationRecipient from './model/AllOfNotificationRecipient';
import AllOfNotificationSender from './model/AllOfNotificationSender';
import AllOfUserInterest from './model/AllOfUserInterest';
import AllOfUserRole from './model/AllOfUserRole';
import AllOfUserTheme from './model/AllOfUserTheme';
import Article from './model/Article';
import BannedArticle from './model/BannedArticle';
import BannedUser from './model/BannedUser';
import Category from './model/Category';
import Clipboard from './model/Clipboard';
import Comment from './model/Comment';
import CreateArticleDto from './model/CreateArticleDto';
import CreateBannedArticleDto from './model/CreateBannedArticleDto';
import CreateBannedUserDto from './model/CreateBannedUserDto';
import CreateCategoryDto from './model/CreateCategoryDto';
import CreateClipboardDto from './model/CreateClipboardDto';
import CreateCommentDto from './model/CreateCommentDto';
import CreateInterestDto from './model/CreateInterestDto';
import CreateNotificationDto from './model/CreateNotificationDto';
import CreateUserDto from './model/CreateUserDto';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse201 from './model/InlineResponse201';
import InlineResponse2011 from './model/InlineResponse2011';
import InlineResponse404 from './model/InlineResponse404';
import InlineResponse4041 from './model/InlineResponse4041';
import InlineResponse40410 from './model/InlineResponse40410';
import InlineResponse40411 from './model/InlineResponse40411';
import InlineResponse40412 from './model/InlineResponse40412';
import InlineResponse4042 from './model/InlineResponse4042';
import InlineResponse4043 from './model/InlineResponse4043';
import InlineResponse4044 from './model/InlineResponse4044';
import InlineResponse4045 from './model/InlineResponse4045';
import InlineResponse4046 from './model/InlineResponse4046';
import InlineResponse4047 from './model/InlineResponse4047';
import InlineResponse4048 from './model/InlineResponse4048';
import InlineResponse4049 from './model/InlineResponse4049';
import Interest from './model/Interest';
import Notification from './model/Notification';
import Role from './model/Role';
import Theme from './model/Theme';
import UpdateArticleDto from './model/UpdateArticleDto';
import UpdateArticleRatingDto from './model/UpdateArticleRatingDto';
import UpdateClipboardDto from './model/UpdateClipboardDto';
import UploadImageDto from './model/UploadImageDto';
import User from './model/User';
import ArticlesApi from './api/ArticlesApi';
import BannedArticleApi from './api/BannedArticleApi';
import BannedUserApi from './api/BannedUserApi';
import CategoriesApi from './api/CategoriesApi';
import ClipboardsApi from './api/ClipboardsApi';
import CommentsApi from './api/CommentsApi';
import ImagesApi from './api/ImagesApi';
import InterestsApi from './api/InterestsApi';
import NotificationsApi from './api/NotificationsApi';
import UsersApi from './api/UsersApi';

/**
* API_do_Aplikacja_dla_studentw_zagranicznych_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var KnowYourPlaceApi = require('index'); // See note below*.
* var xxxSvc = new KnowYourPlaceApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new KnowYourPlaceApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new KnowYourPlaceApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new KnowYourPlaceApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AllOfArticleAuthor model constructor.
     * @property {module:model/AllOfArticleAuthor}
     */
    AllOfArticleAuthor,

    /**
     * The AllOfArticleCategory model constructor.
     * @property {module:model/AllOfArticleCategory}
     */
    AllOfArticleCategory,

    /**
     * The AllOfBannedArticleArticle model constructor.
     * @property {module:model/AllOfBannedArticleArticle}
     */
    AllOfBannedArticleArticle,

    /**
     * The AllOfBannedUserUser model constructor.
     * @property {module:model/AllOfBannedUserUser}
     */
    AllOfBannedUserUser,

    /**
     * The AllOfClipboardUser model constructor.
     * @property {module:model/AllOfClipboardUser}
     */
    AllOfClipboardUser,

    /**
     * The AllOfCommentArticle model constructor.
     * @property {module:model/AllOfCommentArticle}
     */
    AllOfCommentArticle,

    /**
     * The AllOfCommentAuthor model constructor.
     * @property {module:model/AllOfCommentAuthor}
     */
    AllOfCommentAuthor,

    /**
     * The AllOfNotificationRecipient model constructor.
     * @property {module:model/AllOfNotificationRecipient}
     */
    AllOfNotificationRecipient,

    /**
     * The AllOfNotificationSender model constructor.
     * @property {module:model/AllOfNotificationSender}
     */
    AllOfNotificationSender,

    /**
     * The AllOfUserInterest model constructor.
     * @property {module:model/AllOfUserInterest}
     */
    AllOfUserInterest,

    /**
     * The AllOfUserRole model constructor.
     * @property {module:model/AllOfUserRole}
     */
    AllOfUserRole,

    /**
     * The AllOfUserTheme model constructor.
     * @property {module:model/AllOfUserTheme}
     */
    AllOfUserTheme,

    /**
     * The Article model constructor.
     * @property {module:model/Article}
     */
    Article,

    /**
     * The BannedArticle model constructor.
     * @property {module:model/BannedArticle}
     */
    BannedArticle,

    /**
     * The BannedUser model constructor.
     * @property {module:model/BannedUser}
     */
    BannedUser,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Clipboard model constructor.
     * @property {module:model/Clipboard}
     */
    Clipboard,

    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment,

    /**
     * The CreateArticleDto model constructor.
     * @property {module:model/CreateArticleDto}
     */
    CreateArticleDto,

    /**
     * The CreateBannedArticleDto model constructor.
     * @property {module:model/CreateBannedArticleDto}
     */
    CreateBannedArticleDto,

    /**
     * The CreateBannedUserDto model constructor.
     * @property {module:model/CreateBannedUserDto}
     */
    CreateBannedUserDto,

    /**
     * The CreateCategoryDto model constructor.
     * @property {module:model/CreateCategoryDto}
     */
    CreateCategoryDto,

    /**
     * The CreateClipboardDto model constructor.
     * @property {module:model/CreateClipboardDto}
     */
    CreateClipboardDto,

    /**
     * The CreateCommentDto model constructor.
     * @property {module:model/CreateCommentDto}
     */
    CreateCommentDto,

    /**
     * The CreateInterestDto model constructor.
     * @property {module:model/CreateInterestDto}
     */
    CreateInterestDto,

    /**
     * The CreateNotificationDto model constructor.
     * @property {module:model/CreateNotificationDto}
     */
    CreateNotificationDto,

    /**
     * The CreateUserDto model constructor.
     * @property {module:model/CreateUserDto}
     */
    CreateUserDto,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011,

    /**
     * The InlineResponse404 model constructor.
     * @property {module:model/InlineResponse404}
     */
    InlineResponse404,

    /**
     * The InlineResponse4041 model constructor.
     * @property {module:model/InlineResponse4041}
     */
    InlineResponse4041,

    /**
     * The InlineResponse40410 model constructor.
     * @property {module:model/InlineResponse40410}
     */
    InlineResponse40410,

    /**
     * The InlineResponse40411 model constructor.
     * @property {module:model/InlineResponse40411}
     */
    InlineResponse40411,

    /**
     * The InlineResponse40412 model constructor.
     * @property {module:model/InlineResponse40412}
     */
    InlineResponse40412,

    /**
     * The InlineResponse4042 model constructor.
     * @property {module:model/InlineResponse4042}
     */
    InlineResponse4042,

    /**
     * The InlineResponse4043 model constructor.
     * @property {module:model/InlineResponse4043}
     */
    InlineResponse4043,

    /**
     * The InlineResponse4044 model constructor.
     * @property {module:model/InlineResponse4044}
     */
    InlineResponse4044,

    /**
     * The InlineResponse4045 model constructor.
     * @property {module:model/InlineResponse4045}
     */
    InlineResponse4045,

    /**
     * The InlineResponse4046 model constructor.
     * @property {module:model/InlineResponse4046}
     */
    InlineResponse4046,

    /**
     * The InlineResponse4047 model constructor.
     * @property {module:model/InlineResponse4047}
     */
    InlineResponse4047,

    /**
     * The InlineResponse4048 model constructor.
     * @property {module:model/InlineResponse4048}
     */
    InlineResponse4048,

    /**
     * The InlineResponse4049 model constructor.
     * @property {module:model/InlineResponse4049}
     */
    InlineResponse4049,

    /**
     * The Interest model constructor.
     * @property {module:model/Interest}
     */
    Interest,

    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The Theme model constructor.
     * @property {module:model/Theme}
     */
    Theme,

    /**
     * The UpdateArticleDto model constructor.
     * @property {module:model/UpdateArticleDto}
     */
    UpdateArticleDto,

    /**
     * The UpdateArticleRatingDto model constructor.
     * @property {module:model/UpdateArticleRatingDto}
     */
    UpdateArticleRatingDto,

    /**
     * The UpdateClipboardDto model constructor.
     * @property {module:model/UpdateClipboardDto}
     */
    UpdateClipboardDto,

    /**
     * The UploadImageDto model constructor.
     * @property {module:model/UploadImageDto}
     */
    UploadImageDto,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The ArticlesApi service constructor.
    * @property {module:api/ArticlesApi}
    */
    ArticlesApi,

    /**
    * The BannedArticleApi service constructor.
    * @property {module:api/BannedArticleApi}
    */
    BannedArticleApi,

    /**
    * The BannedUserApi service constructor.
    * @property {module:api/BannedUserApi}
    */
    BannedUserApi,

    /**
    * The CategoriesApi service constructor.
    * @property {module:api/CategoriesApi}
    */
    CategoriesApi,

    /**
    * The ClipboardsApi service constructor.
    * @property {module:api/ClipboardsApi}
    */
    ClipboardsApi,

    /**
    * The CommentsApi service constructor.
    * @property {module:api/CommentsApi}
    */
    CommentsApi,

    /**
    * The ImagesApi service constructor.
    * @property {module:api/ImagesApi}
    */
    ImagesApi,

    /**
    * The InterestsApi service constructor.
    * @property {module:api/InterestsApi}
    */
    InterestsApi,

    /**
    * The NotificationsApi service constructor.
    * @property {module:api/NotificationsApi}
    */
    NotificationsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
