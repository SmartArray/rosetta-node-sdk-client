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
import SubAccountIdentifier from './SubAccountIdentifier';

/**
 * The AccountIdentifier model module.
 * @module model/AccountIdentifier
 * @version 1.4.1
 */
class AccountIdentifier {
    /**
     * Constructs a new <code>AccountIdentifier</code>.
     * The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).
     * @alias module:model/AccountIdentifier
     * @param address {String} The address may be a cryptographic public key (or some encoding of it) or a provided username.
     */
    constructor(address) { 
        
        AccountIdentifier.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>AccountIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountIdentifier} obj Optional instance to populate.
     * @return {module:model/AccountIdentifier} The populated <code>AccountIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountIdentifier();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('sub_account')) {
                obj['sub_account'] = SubAccountIdentifier.constructFromObject(data['sub_account']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * The address may be a cryptographic public key (or some encoding of it) or a provided username.
 * @member {String} address
 */
AccountIdentifier.prototype['address'] = undefined;

/**
 * @member {module:model/SubAccountIdentifier} sub_account
 */
AccountIdentifier.prototype['sub_account'] = undefined;

/**
 * Blockchains that utilize a username model (where the address is not a derivative of a cryptographic public key) should specify the public key(s) owned by the address in metadata.
 * @member {Object} metadata
 */
AccountIdentifier.prototype['metadata'] = undefined;






export default AccountIdentifier;

