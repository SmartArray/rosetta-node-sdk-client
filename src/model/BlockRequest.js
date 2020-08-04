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
import PartialBlockIdentifier from './PartialBlockIdentifier';

/**
 * The BlockRequest model module.
 * @module model/BlockRequest
 * @version 1.4.1
 */
class BlockRequest {
    /**
     * Constructs a new <code>BlockRequest</code>.
     * A BlockRequest is utilized to make a block request on the /block endpoint.
     * @alias module:model/BlockRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     * @param blockIdentifier {module:model/PartialBlockIdentifier} 
     */
    constructor(networkIdentifier, blockIdentifier) { 
        
        BlockRequest.initialize(this, networkIdentifier, blockIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier, blockIdentifier) { 
        obj['network_identifier'] = networkIdentifier;
        obj['block_identifier'] = blockIdentifier;
    }

    /**
     * Constructs a <code>BlockRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockRequest} obj Optional instance to populate.
     * @return {module:model/BlockRequest} The populated <code>BlockRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('block_identifier')) {
                obj['block_identifier'] = PartialBlockIdentifier.constructFromObject(data['block_identifier']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
BlockRequest.prototype['network_identifier'] = undefined;

/**
 * @member {module:model/PartialBlockIdentifier} block_identifier
 */
BlockRequest.prototype['block_identifier'] = undefined;






export default BlockRequest;

