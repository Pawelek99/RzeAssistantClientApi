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
* The Category model module.
* @module model/Category
* @version 0.0.1
*/
export default class Category {
    /**
    * Constructs a new <code>Category</code>.
    * @alias module:model/Category
    * @class
    * @param id {String} Id of the category
    * @param name {String} Name of the category
    * @param color {String} Color of the category in hex
    */

    constructor(id, name, color) {
        
        
        this['id'] = id;
        this['name'] = name;
        this['color'] = color;
        
    }

    /**
    * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Category} obj Optional instance to populate.
    * @return {module:model/Category} The populated <code>Category</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Category();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }

    /**
    * Id of the category
    * @member {String} id
    */
    id = undefined;
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




}
