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
 * The InlineResponse40412 model module.
 * @module model/InlineResponse40412
 * @version 0.0.1
 */
export default class InlineResponse40412 {
	/**
	 * Constructs a new <code>InlineResponse40412</code>.
	 * @alias module:model/InlineResponse40412
	 * @class
	 */

	constructor() {}

	/**
	 * Constructs a <code>InlineResponse40412</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/InlineResponse40412} obj Optional instance to populate.
	 * @return {module:model/InlineResponse40412} The populated <code>InlineResponse40412</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new InlineResponse40412();

			if (data.hasOwnProperty('oneOf')) {
				obj['oneOf'] = ApiClient.convertToType(data['oneOf'], Object);
			}
		}
		return obj;
	}

	/**
	 * @member {} oneOf
	 */
	oneOf = undefined;
}
