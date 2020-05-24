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
* The BannedArticle model module.
* @module model/BannedArticle
* @version 0.0.1
*/
export default class BannedArticle {
    /**
    * Constructs a new <code>BannedArticle</code>.
    * @alias module:model/BannedArticle
    * @class
    * @param id {String} Id of the banned article
    * @param bannedAt {String} Date when article got banned
    * @param reason {String} Reason why article is banned
    * @param article {} 
    */

    constructor(id, bannedAt, reason, article) {
        
        
        this['id'] = id;
        this['bannedAt'] = bannedAt;
        this['reason'] = reason;
        this['article'] = article;
        
    }

    /**
    * Constructs a <code>BannedArticle</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BannedArticle} obj Optional instance to populate.
    * @return {module:model/BannedArticle} The populated <code>BannedArticle</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BannedArticle();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('bannedAt')) {
                obj['bannedAt'] = ApiClient.convertToType(data['bannedAt'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('article')) {
                obj['article'] = ApiClient.convertToType(data['article'], Object);
            }
        }
        return obj;
    }

    /**
    * Id of the banned article
    * @member {String} id
    */
    'id' = undefined;
    /**
    * Date when article got banned
    * @member {String} bannedAt
    */
    'bannedAt' = undefined;
    /**
    * Reason why article is banned
    * @member {String} reason
    */
    'reason' = undefined;
    /**
    * @member {} article
    */
    'article' = undefined;




}
