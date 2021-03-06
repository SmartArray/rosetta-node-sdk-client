/**
 * Copyright (c) 2020 DigiByte Foundation NZ Limited
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Rosetta
 * A Standard for Blockchain Interaction
 *
 * The version of the OpenAPI document: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OperationIdentifier model module.
 * @module model/OperationIdentifier
 * @version 1.3.1
 */
class OperationIdentifier {
    /**
     * Constructs a new <code>OperationIdentifier</code>.
     * The operation_identifier uniquely identifies an operation within a transaction.
     * @alias module:model/OperationIdentifier
     * @param index {Number} The operation index is used to ensure each operation has a unique identifier within a transaction.  To clarify, there may not be any notion of an operation index in the blockchain being described.
     */
    constructor(index) { 
        
        OperationIdentifier.initialize(this, index);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index) { 
        obj['index'] = index;
    }

    /**
     * Constructs a <code>OperationIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationIdentifier} obj Optional instance to populate.
     * @return {module:model/OperationIdentifier} The populated <code>OperationIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationIdentifier();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('network_index')) {
                obj['network_index'] = ApiClient.convertToType(data['network_index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The operation index is used to ensure each operation has a unique identifier within a transaction.  To clarify, there may not be any notion of an operation index in the blockchain being described.
 * @member {Number} index
 */
OperationIdentifier.prototype['index'] = undefined;

/**
 * Some blockchains specify an operation index that is essential for client use. For example, Bitcoin uses a network_index to identify which UTXO was used in a transaction.  network_index should not be populated if there is no notion of an operation index in a blockchain (typically most account-based blockchains).
 * @member {Number} network_index
 */
OperationIdentifier.prototype['network_index'] = undefined;






export default OperationIdentifier;

