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
 * The CreateCategoryDto model module.
 * @module model/CreateCategoryDto
 * @version 0.0.1
 */
export default class CreateCategoryDto {
	/**
	 * Constructs a new <code>CreateCategoryDto</code>.
	 * @alias module:model/CreateCategoryDto
	 * @class
	 * @param name {String} Name of the category
	 * @param color {String} Color of the category in hex
	 * @param icon {String} Icon of the category
	 */

	constructor(name, color, icon) {
		this['name'] = name;
		this['color'] = color;
		this['icon'] = icon;
	}

	/**
	 * Constructs a <code>CreateCategoryDto</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/CreateCategoryDto} obj Optional instance to populate.
	 * @return {module:model/CreateCategoryDto} The populated <code>CreateCategoryDto</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new CreateCategoryDto();

			if (data.hasOwnProperty('name')) {
				obj['name'] = ApiClient.convertToType(data['name'], 'String');
			}
			if (data.hasOwnProperty('color')) {
				obj['color'] = ApiClient.convertToType(data['color'], 'String');
			}
			if (data.hasOwnProperty('icon')) {
				obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
			}
		}
		return obj;
	}

	/**
	 * Name of the category
	 * @member {String} name
	 */
	name = undefined;
	/**
	 * Color of the category in hex
	 * @member {String} color
	 */
	color = undefined;
	/**
	 * Icon of the category
	 * @member {String} icon
	 */
	icon = undefined;
}
