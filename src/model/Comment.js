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
* The Comment model module.
* @module model/Comment
* @version 0.0.1
*/
export default class Comment {
    /**
    * Constructs a new <code>Comment</code>.
    * @alias module:model/Comment
    * @class
    * @param id {String} Id of the comment
    * @param content {String} Content of the comment
    * @param createdAt {String} Creation date of the comment
    * @param article {} 
    * @param author {} 
    */

    constructor(id, content, createdAt, article, author) {
        
        
        this['id'] = id;
        this['content'] = content;
        this['createdAt'] = createdAt;
        this['article'] = article;
        this['author'] = author;
        
    }

    /**
    * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Comment} obj Optional instance to populate.
    * @return {module:model/Comment} The populated <code>Comment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Comment();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('article')) {
                obj['article'] = ApiClient.convertToType(data['article'], ModelObject);
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], ModelObject);
            }
        }
        return obj;
    }

    /**
    * Id of the comment
    * @member {String} id
    */
    id = undefined;
    /**
    * Content of the comment
    * @member {String} content
    */
    content = undefined;
    /**
    * Creation date of the comment
    * @member {String} createdAt
    */
    createdAt = undefined;
    /**
    * @member {} article
    */
    article = undefined;
    /**
    * @member {} author
    */
    author = undefined;




}
