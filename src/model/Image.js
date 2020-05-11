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
* The Image model module.
* @module model/Image
* @version 0.0.1
*/
export default class Image {
    /**
    * Constructs a new <code>Image</code>.
    * @alias module:model/Image
    * @class
    * @param id {String} Id of the image
    * @param extension {String} Extension of the image
    * @param uploadedBy {} 
    */

    constructor(id, extension, uploadedBy) {
        
        
        this['id'] = id;
        this['extension'] = extension;
        this['uploadedBy'] = uploadedBy;
        
    }

    /**
    * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Image} obj Optional instance to populate.
    * @return {module:model/Image} The populated <code>Image</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
            if (data.hasOwnProperty('uploadedBy')) {
                obj['uploadedBy'] = ApiClient.convertToType(data['uploadedBy'], );
            }
        }
        return obj;
    }

    /**
    * Id of the image
    * @member {String} id
    */
    id = undefined;
    /**
    * Extension of the image
    * @member {String} extension
    */
    extension = undefined;
    /**
    * @member {} uploadedBy
    */
    uploadedBy = undefined;




}
