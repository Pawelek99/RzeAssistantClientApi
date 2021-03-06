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
import Article from './Article';Object

/**
 * The AllOfBannedArticleArticle model module.
 * @module model/AllOfBannedArticleArticle
 * @version 0.0.1
 */
export default class AllOfBannedArticleArticle {
	/**
	 * Constructs a new <code>AllOfBannedArticleArticle</code>.
	 * @alias module:model/AllOfBannedArticleArticle
	 * @class
	 * @extends module:model/Article
	 * @param id {} Id of the article
	 * @param title {} Title of the article
	 * @param content {} Content of the article
	 * @param createdAt {} Creation date of the article
	 * @param updatedAt {} Update date of the article
	 * @param dislikesList {} List of dislikes' authors ids
	 * @param likesList {} List of likes' authors ids
	 * @param category {}
	 * @param author {}
	 * @param coverImage {} Cover image link of the article
	 */

	constructor(
		id,
		title,
		content,
		createdAt,
		updatedAt,
		dislikesList,
		likesList,
		category,
		author,
		coverImage
	) {
		Article.call(
			this,
			id,
			title,
			content,
			createdAt,
			updatedAt,
			dislikesList,
			likesList,
			category,
			author,
			coverImage
		);
	}

	/**
	 * Constructs a <code>AllOfBannedArticleArticle</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/AllOfBannedArticleArticle} obj Optional instance to populate.
	 * @return {module:model/AllOfBannedArticleArticle} The populated <code>AllOfBannedArticleArticle</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new AllOfBannedArticleArticle();

			Article.constructFromObject(data, obj);
		}
		return obj;
	}
}
