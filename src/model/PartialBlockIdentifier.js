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
 * The PartialBlockIdentifier model module.
 * @module model/PartialBlockIdentifier
 * @version 1.3.1
 */
class PartialBlockIdentifier {
    /**
     * Constructs a new <code>PartialBlockIdentifier</code>.
     * When fetching data by BlockIdentifier, it may be possible to only specify the index or hash. If neither property is specified, it is assumed that the client is making a request at the current block.
     * @alias module:model/PartialBlockIdentifier
     */
    constructor() { 
        
        PartialBlockIdentifier.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PartialBlockIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartialBlockIdentifier} obj Optional instance to populate.
     * @return {module:model/PartialBlockIdentifier} The populated <code>PartialBlockIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartialBlockIdentifier();

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
 * @member {Number} index
 */
PartialBlockIdentifier.prototype['index'] = undefined;

/**
 * @member {String} hash
 */
PartialBlockIdentifier.prototype['hash'] = undefined;






export default PartialBlockIdentifier;

