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

/**
 * The InlineResponse404 model module.
 * @module model/InlineResponse404
 * @version 0.0.1
 */
export default class InlineResponse404 {
	/**
	 * Constructs a new <code>InlineResponse404</code>.
	 * @alias module:model/InlineResponse404
	 * @class
	 */

	constructor() {}

	/**
	 * Constructs a <code>InlineResponse404</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/InlineResponse404} obj Optional instance to populate.
	 * @return {module:model/InlineResponse404} The populated <code>InlineResponse404</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new InlineResponse404();

			if (data.hasOwnProperty('status')) {
				obj['status'] = ApiClient.convertToType(data['status'], 'String');
			}
		}
		return obj;
	}

	/**
	 * Status of the action
	 * @member {String} status
	 */
	status = undefined;
}
