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

import User from './User';

/**
* The AllOfClipboardUser model module.
* @module model/AllOfClipboardUser
* @version 0.0.1
*/
export default class AllOfClipboardUser {
    /**
    * Constructs a new <code>AllOfClipboardUser</code>.
    * @alias module:model/AllOfClipboardUser
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
    * Constructs a <code>AllOfClipboardUser</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfClipboardUser} obj Optional instance to populate.
    * @return {module:model/AllOfClipboardUser} The populated <code>AllOfClipboardUser</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfClipboardUser();
            
            User.constructFromObject(data, obj);
            
        }
        return obj;
    }





}
