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

import ApiClient from '../ApiClient';
import CreateUserDto from '../model/CreateUserDto';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse404 from '../model/InlineResponse404';
import InlineResponse4043 from '../model/InlineResponse4043';
import User from '../model/User';

/**
 * Users service.
 * @module api/UsersApi
 * @version 0.0.1
 */
export default class UsersApi {
	/**
	 * Constructs a new UsersApi.
	 * @alias module:api/UsersApi
	 * @class
	 * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
	 * default to {@link module:ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}

	/**
	 * Callback function to receive the result of the userControllerCreate operation.
	 * @callback module:api/UsersApi~userControllerCreateCallback
	 * @param {String} error Error message, if any.
	 * @param {module:model/InlineResponse200} data The data returned by the service call.
	 * @param {String} response The complete HTTP response.
	 */

	/**
	 * Creates new user
	 * @param {module:api/UsersApi~userControllerCreateCallback} callback The callback function, accepting three arguments: error, data, response
	 * data is of type: {@link module:model/InlineResponse200}
	 */
	userControllerCreate(body, callback) {
		let postBody = body;

		let pathParams = {};
		let queryParams = {};
		let headerParams = {};
		let formParams = {};

		let authNames = ['bearer'];
		let contentTypes = ['application/json'];
		let accepts = ['application/json'];
		let returnType = InlineResponse200;

		return this.apiClient.callApi(
			'/api/v1/users',
			'POST',
			pathParams,
			queryParams,
			headerParams,
			formParams,
			postBody,
			authNames,
			contentTypes,
			accepts,
			returnType,
			callback
		);
	}
	/**
	 * Callback function to receive the result of the userControllerFindById operation.
	 * @callback module:api/UsersApi~userControllerFindByIdCallback
	 * @param {String} error Error message, if any.
	 * @param {module:model/User} data The data returned by the service call.
	 * @param {String} response The complete HTTP response.
	 */

	/**
	 * Returns user details by id
	 * @param {module:api/UsersApi~userControllerFindByIdCallback} callback The callback function, accepting three arguments: error, data, response
	 * data is of type: {@link module:model/User}
	 */
	userControllerFindById(id, callback) {
		let postBody = null;

		let pathParams = {
			id: id,
		};
		let queryParams = {};
		let headerParams = {};
		let formParams = {};

		let authNames = ['bearer'];
		let contentTypes = [];
		let accepts = ['application/json'];
		let returnType = User;

		return this.apiClient.callApi(
			'/api/v1/users/{id}',
			'GET',
			pathParams,
			queryParams,
			headerParams,
			formParams,
			postBody,
			authNames,
			contentTypes,
			accepts,
			returnType,
			callback
		);
	}
}
