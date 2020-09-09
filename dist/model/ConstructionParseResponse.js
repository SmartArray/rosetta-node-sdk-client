"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Operation = _interopRequireDefault(require("./Operation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionParseResponse model module.
 * @module model/ConstructionParseResponse
 * @version 1.4.1
 */
var ConstructionParseResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionParseResponse</code>.
   * ConstructionParseResponse contains an array of operations that occur in a transaction blob. This should match the array of operations provided to &#x60;/construction/preprocess&#x60; and &#x60;/construction/payloads&#x60;.
   * @alias module:model/ConstructionParseResponse
   * @param operations {Array.<module:model/Operation>} 
   * @param signers {Array.<String>} All signers of a particular transaction. If the transaction is unsigned, it should be empty.
   */
  function ConstructionParseResponse(operations, signers) {
    _classCallCheck(this, ConstructionParseResponse);

    ConstructionParseResponse.initialize(this, operations, signers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionParseResponse, null, [{
    key: "initialize",
    value: function initialize(obj, operations, signers) {
      obj['operations'] = operations;
      obj['signers'] = signers;
    }
    /**
     * Constructs a <code>ConstructionParseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionParseResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionParseResponse} The populated <code>ConstructionParseResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionParseResponse();

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], [_Operation["default"]]);
        }

        if (data.hasOwnProperty('signers')) {
          obj['signers'] = _ApiClient["default"].convertToType(data['signers'], ['String']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }
      }

      return obj;
    }
  }]);

  return ConstructionParseResponse;
}();
/**
 * @member {Array.<module:model/Operation>} operations
 */


ConstructionParseResponse.prototype['operations'] = undefined;
/**
 * All signers of a particular transaction. If the transaction is unsigned, it should be empty.
 * @member {Array.<String>} signers
 */

ConstructionParseResponse.prototype['signers'] = undefined;
/**
 * @member {Object} metadata
 */

ConstructionParseResponse.prototype['metadata'] = undefined;
var _default = ConstructionParseResponse;
exports["default"] = _default;