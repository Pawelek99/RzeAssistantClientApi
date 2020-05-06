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
* The BannedUser model module.
* @module model/BannedUser
* @version 0.0.1
*/
export default class BannedUser {
    /**
    * Constructs a new <code>BannedUser</code>.
    * @alias module:model/BannedUser
    * @class
    * @param id {String} Id of the banned user
    * @param bannedAt {String} Date when user got banned
    * @param reason {String} Reason why user is banned
    * @param user {} 
    */

    constructor(id, bannedAt, reason, user) {
        
        
        this['id'] = id;
        this['bannedAt'] = bannedAt;
        this['reason'] = reason;
        this['user'] = user;
        
    }

    /**
    * Constructs a <code>BannedUser</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BannedUser} obj Optional instance to populate.
    * @return {module:model/BannedUser} The populated <code>BannedUser</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BannedUser();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('bannedAt')) {
                obj['bannedAt'] = ApiClient.convertToType(data['bannedAt'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], ModelObject);
            }
        }
        return obj;
    }

    /**
    * Id of the banned user
    * @member {String} id
    */
    id = undefined;
    /**
    * Date when user got banned
    * @member {String} bannedAt
    */
    bannedAt = undefined;
    /**
    * Reason why user is banned
    * @member {String} reason
    */
    reason = undefined;
    /**
    * @member {} user
    */
    user = undefined;




}
