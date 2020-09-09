"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionPreprocessResponse model module.
 * @module model/ConstructionPreprocessResponse
 * @version 1.4.1
 */
var ConstructionPreprocessResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionPreprocessResponse</code>.
   * ConstructionPreprocessResponse contains the request that will be sent directly to &#x60;/construction/metadata&#x60;. If it is not necessary to make a request to &#x60;/construction/metadata&#x60;, options should be null.
   * @alias module:model/ConstructionPreprocessResponse
   */
  function ConstructionPreprocessResponse() {
    _classCallCheck(this, ConstructionPreprocessResponse);

    ConstructionPreprocessResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionPreprocessResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConstructionPreprocessResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionPreprocessResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionPreprocessResponse} The populated <code>ConstructionPreprocessResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionPreprocessResponse();

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], Object);
        }
      }

      return obj;
    }
  }]);

  return ConstructionPreprocessResponse;
}();
/**
 * The options that will be sent directly to `/construction/metadata` by the caller.
 * @member {Object} options
 */


ConstructionPreprocessResponse.prototype['options'] = undefined;
var _default = ConstructionPreprocessResponse;
exports["default"] = _default;