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
 * The CreateBannedArticleDto model module.
 * @module model/CreateBannedArticleDto
 * @version 0.0.1
 */
export default class CreateBannedArticleDto {
	/**
	 * Constructs a new <code>CreateBannedArticleDto</code>.
	 * @alias module:model/CreateBannedArticleDto
	 * @class
	 * @param reason {String} Reason why article is banned
	 * @param articleId {String} Banned article id
	 */

	constructor(reason, articleId) {
		this['reason'] = reason;
		this['articleId'] = articleId;
	}

	/**
	 * Constructs a <code>CreateBannedArticleDto</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/CreateBannedArticleDto} obj Optional instance to populate.
	 * @return {module:model/CreateBannedArticleDto} The populated <code>CreateBannedArticleDto</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new CreateBannedArticleDto();

			if (data.hasOwnProperty('reason')) {
				obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
			}
			if (data.hasOwnProperty('articleId')) {
				obj['articleId'] = ApiClient.convertToType(data['articleId'], 'String');
			}
		}
		return obj;
	}

	/**
	 * Reason why article is banned
	 * @member {String} reason
	 */
	reason = undefined;
	/**
	 * Banned article id
	 * @member {String} articleId
	 */
	articleId = undefined;
}
