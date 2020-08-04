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
 * The BlockIdentifier model module.
 * @module model/BlockIdentifier
 * @version 1.4.1
 */
class BlockIdentifier {
    /**
     * Constructs a new <code>BlockIdentifier</code>.
     * The block_identifier uniquely identifies a block in a particular network.
     * @alias module:model/BlockIdentifier
     * @param index {Number} This is also known as the block height.
     * @param hash {String} 
     */
    constructor(index, hash) { 
        
        BlockIdentifier.initialize(this, index, hash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index, hash) { 
        obj['index'] = index;
        obj['hash'] = hash;
    }

    /**
     * Constructs a <code>BlockIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockIdentifier} obj Optional instance to populate.
     * @return {module:model/BlockIdentifier} The populated <code>BlockIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockIdentifier();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * This is also known as the block height.
 * @member {Number} index
 */
BlockIdentifier.prototype['index'] = undefined;

/**
 * @member {String} hash
 */
BlockIdentifier.prototype['hash'] = undefined;






export default BlockIdentifier;

