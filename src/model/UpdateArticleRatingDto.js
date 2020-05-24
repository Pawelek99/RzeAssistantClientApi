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
* The UpdateArticleRatingDto model module.
* @module model/UpdateArticleRatingDto
* @version 0.0.1
*/
export default class UpdateArticleRatingDto {
    /**
    * Constructs a new <code>UpdateArticleRatingDto</code>.
    * @alias module:model/UpdateArticleRatingDto
    * @class
    * @param increase {Boolean} Indicates if the operation should increase or decrease counter
    * @param authorId {String} Id of the Author of the rating
    */

    constructor(increase, authorId) {
        
        
        this['increase'] = increase;
        this['authorId'] = authorId;
        
    }

    /**
    * Constructs a <code>UpdateArticleRatingDto</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UpdateArticleRatingDto} obj Optional instance to populate.
    * @return {module:model/UpdateArticleRatingDto} The populated <code>UpdateArticleRatingDto</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateArticleRatingDto();
                        
            
            if (data.hasOwnProperty('increase')) {
                obj['increase'] = ApiClient.convertToType(data['increase'], 'Boolean');
            }
            if (data.hasOwnProperty('authorId')) {
                obj['authorId'] = ApiClient.convertToType(data['authorId'], 'String');
            }
        }
        return obj;
    }

    /**
    * Indicates if the operation should increase or decrease counter
    * @member {Boolean} increase
    */
    'increase' = undefined;
    /**
    * Id of the Author of the rating
    * @member {String} authorId
    */
    'authorId' = undefined;




}
