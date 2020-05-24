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
* The Role model module.
* @module model/Role
* @version 0.0.1
*/
export default class Role {
    /**
    * Constructs a new <code>Role</code>.
    * @alias module:model/Role
    * @class
    * @param id {String} Like never you saw an id lol
    * @param name {String} Name of the role simple...
    */

    constructor(id, name) {
        
        
        this['id'] = id;
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Role} obj Optional instance to populate.
    * @return {module:model/Role} The populated <code>Role</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * Like never you saw an id lol
    * @member {String} id
    */
    'id' = undefined;
    /**
    * Name of the role simple...
    * @member {String} name
    */
    'name' = undefined;




}
