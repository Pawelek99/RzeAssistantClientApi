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
* The InlineResponse4041 model module.
* @module model/InlineResponse4041
* @version 0.0.1
*/
export default class InlineResponse4041 {
    /**
    * Constructs a new <code>InlineResponse4041</code>.
    * @alias module:model/InlineResponse4041
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse4041</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse4041} obj Optional instance to populate.
    * @return {module:model/InlineResponse4041} The populated <code>InlineResponse4041</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse4041();
                        
            
            if (data.hasOwnProperty('oneOf')) {
                obj['oneOf'] = ApiClient.convertToType(data['oneOf'], );
            }
        }
        return obj;
    }

    /**
    * @member {} oneOf
    */
    oneOf = undefined;




}
