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
import Category from './Category';

/**
* The AllOfArticleCategory model module.
* @module model/AllOfArticleCategory
* @version 0.0.1
*/
export default class AllOfArticleCategory {
    /**
    * Constructs a new <code>AllOfArticleCategory</code>.
    * @alias module:model/AllOfArticleCategory
    * @class
    * @extends module:model/Category
    * @param id {} Id of the category
    * @param name {} Name of the category
    * @param color {} Color of the category in hex
    * @param icon {} Icon of the category
    */

    constructor(id, name, color, icon) {
        Category.call(this, id, name, color, icon);
        
        
    }

    /**
    * Constructs a <code>AllOfArticleCategory</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfArticleCategory} obj Optional instance to populate.
    * @return {module:model/AllOfArticleCategory} The populated <code>AllOfArticleCategory</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfArticleCategory();
            
            Category.constructFromObject(data, obj);
            
        }
        return obj;
    }





}
