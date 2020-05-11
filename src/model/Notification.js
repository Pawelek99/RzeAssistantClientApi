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
* The Notification model module.
* @module model/Notification
* @version 0.0.1
*/
export default class Notification {
    /**
    * Constructs a new <code>Notification</code>.
    * @alias module:model/Notification
    * @class
    * @param id {String} This is id
    * @param content {String} Content of the notification
    * @param createdAt {String} Creation date of the notification
    * @param sender {} 
    * @param recipient {} 
    */

    constructor(id, content, createdAt, sender, recipient) {
        
        
        this['id'] = id;
        this['content'] = content;
        this['createdAt'] = createdAt;
        this['sender'] = sender;
        this['recipient'] = recipient;
        
    }

    /**
    * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Notification} obj Optional instance to populate.
    * @return {module:model/Notification} The populated <code>Notification</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notification();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], );
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], );
            }
        }
        return obj;
    }

    /**
    * This is id
    * @member {String} id
    */
    id = undefined;
    /**
    * Content of the notification
    * @member {String} content
    */
    content = undefined;
    /**
    * Creation date of the notification
    * @member {String} createdAt
    */
    createdAt = undefined;
    /**
    * @member {} sender
    */
    sender = undefined;
    /**
    * @member {} recipient
    */
    recipient = undefined;




}
