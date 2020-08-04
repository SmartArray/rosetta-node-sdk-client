/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ConstructionPreprocessResponse model module.
 * @module model/ConstructionPreprocessResponse
 * @version 1.4.1
 */
class ConstructionPreprocessResponse {
    /**
     * Constructs a new <code>ConstructionPreprocessResponse</code>.
     * ConstructionPreprocessResponse contains the request that will be sent directly to &#x60;/construction/metadata&#x60;. If it is not necessary to make a request to &#x60;/construction/metadata&#x60;, options should be null.
     * @alias module:model/ConstructionPreprocessResponse
     */
    constructor() { 
        
        ConstructionPreprocessResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConstructionPreprocessResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionPreprocessResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionPreprocessResponse} The populated <code>ConstructionPreprocessResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionPreprocessResponse();

            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
        }
        return obj;
    }


}

/**
 * The options that will be sent directly to `/construction/metadata` by the caller.
 * @member {Object} options
 */
ConstructionPreprocessResponse.prototype['options'] = undefined;






export default ConstructionPreprocessResponse;
