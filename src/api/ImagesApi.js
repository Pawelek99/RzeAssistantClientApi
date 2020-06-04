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
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2011 from '../model/InlineResponse2011';
import InlineResponse404 from '../model/InlineResponse404';
import InlineResponse4045 from '../model/InlineResponse4045';

/**
 * Images service.
 * @module api/ImagesApi
 * @version 0.0.1
 */
export default class ImagesApi {
	/**
	 * Constructs a new ImagesApi.
	 * @alias module:api/ImagesApi
	 * @class
	 * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
	 * default to {@link module:ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}

	/**
	 * Callback function to receive the result of the imageControllerCreate operation.
	 * @callback module:api/ImagesApi~imageControllerCreateCallback
	 * @param {String} error Error message, if any.
	 * @param {module:model/InlineResponse2011} data The data returned by the service call.
	 * @param {String} response The complete HTTP response.
	 */

	/**
	 * Uploads a new image
	 * @param {module:api/ImagesApi~imageControllerCreateCallback} callback The callback function, accepting three arguments: error, data, response
	 * data is of type: {@link module:model/InlineResponse2011}
	 */
	imageControllerCreate(file, uploadedBy, callback) {
		let postBody = null;

		let pathParams = {};
		let queryParams = {};
		let headerParams = {};
		let formParams = {
			file: file,
			uploadedBy: uploadedBy,
		};

		let authNames = ['bearer'];
		let contentTypes = ['multipart/form-data'];
		let accepts = ['application/json'];
		let returnType = InlineResponse2011;

		return this.apiClient.callApi(
			'/api/v1/images',
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
	 * Callback function to receive the result of the imageControllerFindAllUploadedBy operation.
	 * @callback module:api/ImagesApi~imageControllerFindAllUploadedByCallback
	 * @param {String} error Error message, if any.
	 * @param {Array.<module:model/InlineResponse2002>} data The data returned by the service call.
	 * @param {String} response The complete HTTP response.
	 */

	/**
	 * Returns all images by user id
	 * @param {module:api/ImagesApi~imageControllerFindAllUploadedByCallback} callback The callback function, accepting three arguments: error, data, response
	 * data is of type: {@link Array.<module:model/InlineResponse2002>}
	 */
	imageControllerFindAllUploadedBy(id, callback) {
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
		let returnType = [InlineResponse2002];

		return this.apiClient.callApi(
			'/api/v1/images/user/{id}',
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
	/**
	 * Callback function to receive the result of the imageControllerRemoveByLink operation.
	 * @callback module:api/ImagesApi~imageControllerRemoveByLinkCallback
	 * @param {String} error Error message, if any.
	 * @param {module:model/InlineResponse2001} data The data returned by the service call.
	 * @param {String} response The complete HTTP response.
	 */

	/**
	 * Removes an image
	 * @param {module:api/ImagesApi~imageControllerRemoveByLinkCallback} callback The callback function, accepting three arguments: error, data, response
	 * data is of type: {@link module:model/InlineResponse2001}
	 */
	imageControllerRemoveByLink(id, callback) {
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
		let returnType = InlineResponse2001;

		return this.apiClient.callApi(
			'/api/v1/images/{id}',
			'DELETE',
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
	 * Callback function to receive the result of the imageDataControllerFindByLink operation.
	 * @callback module:api/ImagesApi~imageDataControllerFindByLinkCallback
	 * @param {String} error Error message, if any.
	 * @param {File} data The data returned by the service call.
	 * @param {String} response The complete HTTP response.
	 */

	/**
	 * Returns an image
	 * @param {module:api/ImagesApi~imageDataControllerFindByLinkCallback} callback The callback function, accepting three arguments: error, data, response
	 * data is of type: {@link File}
	 */
	imageDataControllerFindByLink(id, callback) {
		let postBody = null;

		let pathParams = {
			id: id,
		};
		let queryParams = {};
		let headerParams = {};
		let formParams = {};

		let authNames = [];
		let contentTypes = [];
		let accepts = ['image/_*', 'application/json'];
		let returnType = File;

		return this.apiClient.callApi(
			'/files/images/{id}',
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
