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

import ApiClient from '../ApiClient';Object
import User from './User';

/**
 * The AllOfCommentAuthor model module.
 * @module model/AllOfCommentAuthor
 * @version 0.0.1
 */
export default class AllOfCommentAuthor {
	/**
	 * Constructs a new <code>AllOfCommentAuthor</code>.
	 * @alias module:model/AllOfCommentAuthor
	 * @class
	 * @extends module:model/User
	 * @param id {} ID of the user entity
	 * @param name {} User name
	 * @param lastName {} User lastname
	 * @param email {} User email adress
	 * @param passwordHash {} User password
	 * @param role {}
	 * @param theme {}
	 */

	constructor(id, name, lastName, email, passwordHash, role, theme) {
		User.call(this, id, name, lastName, email, passwordHash, role, theme);
	}

	/**
	 * Constructs a <code>AllOfCommentAuthor</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/AllOfCommentAuthor} obj Optional instance to populate.
	 * @return {module:model/AllOfCommentAuthor} The populated <code>AllOfCommentAuthor</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new AllOfCommentAuthor();

			User.constructFromObject(data, obj);
		}
		return obj;
	}
}
