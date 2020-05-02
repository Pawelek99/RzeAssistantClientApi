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
import ModelObject from './ModelObject';
import User from './User';

/**
* The AllOfNotificationSender model module.
* @module model/AllOfNotificationSender
* @version 0.0.1
*/
export default class AllOfNotificationSender {
    /**
    * Constructs a new <code>AllOfNotificationSender</code>.
    * @alias module:model/AllOfNotificationSender
    * @class
    * @extends module:model/User
    * @param id {} ID of the user entity
    * @param name {} User name
    * @param lastName {} User lastname
    * @param email {} User email adress
    * @param passwordHash {} User password
    * @param role {} 
    * @param theme {} 
    */

    constructor(id, name, lastName, email, passwordHash, role, theme) {
        User.call(this, id, name, lastName, email, passwordHash, role, theme);
        
        
    }

    /**
    * Constructs a <code>AllOfNotificationSender</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfNotificationSender} obj Optional instance to populate.
    * @return {module:model/AllOfNotificationSender} The populated <code>AllOfNotificationSender</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfNotificationSender();
            
            User.constructFromObject(data, obj);
            
        }
        return obj;
    }





}
