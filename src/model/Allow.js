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
import Error from './Error';
import OperationStatus from './OperationStatus';

/**
 * The Allow model module.
 * @module model/Allow
 * @version 1.3.1
 */
class Allow {
    /**
     * Constructs a new <code>Allow</code>.
     * Allow specifies supported Operation status, Operation types, and all possible error statuses. This Allow object is used by clients to validate the correctness of a Rosetta Server implementation. It is expected that these clients will error if they receive some response that contains any of the above information that is not specified here.
     * @alias module:model/Allow
     * @param operationStatuses {Array.<module:model/OperationStatus>} All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error.
     * @param operationTypes {Array.<String>} All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error.
     * @param errors {Array.<module:model/Error>} All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error.
     */
    constructor(operationStatuses, operationTypes, errors) { 
        
        Allow.initialize(this, operationStatuses, operationTypes, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operationStatuses, operationTypes, errors) { 
        obj['operation_statuses'] = operationStatuses;
        obj['operation_types'] = operationTypes;
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>Allow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Allow} obj Optional instance to populate.
     * @return {module:model/Allow} The populated <code>Allow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Allow();

            if (data.hasOwnProperty('operation_statuses')) {
                obj['operation_statuses'] = ApiClient.convertToType(data['operation_statuses'], [OperationStatus]);
            }
            if (data.hasOwnProperty('operation_types')) {
                obj['operation_types'] = ApiClient.convertToType(data['operation_types'], ['String']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<module:model/OperationStatus>} operation_statuses
 */
Allow.prototype['operation_statuses'] = undefined;

/**
 * All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<String>} operation_types
 */
Allow.prototype['operation_types'] = undefined;

/**
 * All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<module:model/Error>} errors
 */
Allow.prototype['errors'] = undefined;






export default Allow;

