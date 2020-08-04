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
import NetworkIdentifier from './NetworkIdentifier';
import Operation from './Operation';

/**
 * The ConstructionPayloadsRequest model module.
 * @module model/ConstructionPayloadsRequest
 * @version 1.4.1
 */
class ConstructionPayloadsRequest {
    /**
     * Constructs a new <code>ConstructionPayloadsRequest</code>.
     * ConstructionPayloadsRequest is the request to &#x60;/construction/payloads&#x60;. It contains the network, a slice of operations, and arbitrary metadata that was returned by the call to &#x60;/construction/metadata&#x60;.
     * @alias module:model/ConstructionPayloadsRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     * @param operations {Array.<module:model/Operation>} 
     */
    constructor(networkIdentifier, operations) { 
        
        ConstructionPayloadsRequest.initialize(this, networkIdentifier, operations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier, operations) { 
        obj['network_identifier'] = networkIdentifier;
        obj['operations'] = operations;
    }

    /**
     * Constructs a <code>ConstructionPayloadsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionPayloadsRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionPayloadsRequest} The populated <code>ConstructionPayloadsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionPayloadsRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [Operation]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
ConstructionPayloadsRequest.prototype['network_identifier'] = undefined;

/**
 * @member {Array.<module:model/Operation>} operations
 */
ConstructionPayloadsRequest.prototype['operations'] = undefined;

/**
 * @member {Object} metadata
 */
ConstructionPayloadsRequest.prototype['metadata'] = undefined;






export default ConstructionPayloadsRequest;

