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
 * The InlineResponse2011 model module.
 * @module model/InlineResponse2011
 * @version 0.0.1
 */
export default class InlineResponse2011 {
	/**
	 * Constructs a new <code>InlineResponse2011</code>.
	 * @alias module:model/InlineResponse2011
	 * @class
	 */

	constructor() {}

	/**
	 * Constructs a <code>InlineResponse2011</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/InlineResponse2011} obj Optional instance to populate.
	 * @return {module:model/InlineResponse2011} The populated <code>InlineResponse2011</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new InlineResponse2011();

			if (data.hasOwnProperty('link')) {
				obj['link'] = ApiClient.convertToType(data['link'], 'String');
			}
		}
		return obj;
	}

	/**
	 * Link of the image
	 * @member {String} link
	 */
	link = undefined;
}
