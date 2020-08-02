"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

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
 * Author: Yoshi Jaeger
 * Description: Promisify OpenAPI classes
 */
// obsolete
function _default(object) {
  var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'promises';

  object[key] = function () {
    if (typeof window !== 'undefined') return null;
    var altered = methods.reduce(function (a, k) {
      /*
       * @param {String} error Error message, if any.
       * @param {Model} data The data returned by the service call.
       * @param {String} response The complete HTTP response.      
       */
      a[k] = function (req) {
        console.log(123);
        return new Promise(function (fulfill, reject) {
          // Call original function with the provided argument and a callback.
          console.log('REQ', req);
          object[k](req, function (err, model, res) {
            if (err) {
              return reject(err);
            }

            fulfill(model);
          });
        });
      };

      a[k].bind(object);
      return a;
    }, {});
    return altered;
  }();
}

;