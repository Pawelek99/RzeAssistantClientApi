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
* The CreateInterestDto model module.
* @module model/CreateInterestDto
* @version 0.0.1
*/
export default class CreateInterestDto {
    /**
    * Constructs a new <code>CreateInterestDto</code>.
    * @alias module:model/CreateInterestDto
    * @class
    * @param name {String} Name of THE interest
    */

    constructor(name) {
        
        
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>CreateInterestDto</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateInterestDto} obj Optional instance to populate.
    * @return {module:model/CreateInterestDto} The populated <code>CreateInterestDto</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInterestDto();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * Name of THE interest
    * @member {String} name
    */
    'name' = undefined;




}
