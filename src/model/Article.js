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

/**
 * The Article model module.
 * @module model/Article
 * @version 0.0.1
 */
export default class Article {
	/**
	 * Constructs a new <code>Article</code>.
	 * @alias module:model/Article
	 * @class
	 * @param id {String} Id of the article
	 * @param title {String} Title of the article
	 * @param content {String} Content of the article
	 * @param createdAt {String} Creation date of the article
	 * @param updatedAt {String} Update date of the article
	 * @param dislikesList {Array.<String>} List of dislikes' authors ids
	 * @param likesList {Array.<String>} List of likes' authors ids
	 * @param category {}
	 * @param author {}
	 * @param coverImage {String} Cover image link of the article
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
		this['id'] = id;
		this['title'] = title;
		this['content'] = content;
		this['createdAt'] = createdAt;
		this['updatedAt'] = updatedAt;
		this['dislikesList'] = dislikesList;
		this['likesList'] = likesList;
		this['category'] = category;
		this['author'] = author;
		this['coverImage'] = coverImage;
	}

	/**
	 * Constructs a <code>Article</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/Article} obj Optional instance to populate.
	 * @return {module:model/Article} The populated <code>Article</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new Article();

			if (data.hasOwnProperty('id')) {
				obj['id'] = ApiClient.convertToType(data['id'], 'String');
			}
			if (data.hasOwnProperty('title')) {
				obj['title'] = ApiClient.convertToType(data['title'], 'String');
			}
			if (data.hasOwnProperty('content')) {
				obj['content'] = ApiClient.convertToType(data['content'], 'String');
			}
			if (data.hasOwnProperty('createdAt')) {
				obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
			}
			if (data.hasOwnProperty('updatedAt')) {
				obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
			}
			if (data.hasOwnProperty('dislikesList')) {
				obj['dislikesList'] = ApiClient.convertToType(data['dislikesList'], [
					'String',
				]);
			}
			if (data.hasOwnProperty('likesList')) {
				obj['likesList'] = ApiClient.convertToType(data['likesList'], [
					'String',
				]);
			}
			if (data.hasOwnProperty('category')) {
				obj['category'] = ApiClient.convertToType(
					data['category'],
					Object
				);
			}
			if (data.hasOwnProperty('author')) {
				obj['author'] = ApiClient.convertToType(data['author'], Object);
			}
			if (data.hasOwnProperty('coverImage')) {
				obj['coverImage'] = ApiClient.convertToType(
					data['coverImage'],
					'String'
				);
			}
		}
		return obj;
	}

	/**
	 * Id of the article
	 * @member {String} id
	 */
	id = undefined;
	/**
	 * Title of the article
	 * @member {String} title
	 */
	title = undefined;
	/**
	 * Content of the article
	 * @member {String} content
	 */
	content = undefined;
	/**
	 * Creation date of the article
	 * @member {String} createdAt
	 */
	createdAt = undefined;
	/**
	 * Update date of the article
	 * @member {String} updatedAt
	 */
	updatedAt = undefined;
	/**
	 * List of dislikes' authors ids
	 * @member {Array.<String>} dislikesList
	 */
	dislikesList = undefined;
	/**
	 * List of likes' authors ids
	 * @member {Array.<String>} likesList
	 */
	likesList = undefined;
	/**
	 * @member {} category
	 */
	category = undefined;
	/**
	 * @member {} author
	 */
	author = undefined;
	/**
	 * Cover image link of the article
	 * @member {String} coverImage
	 */
	coverImage = undefined;
}
