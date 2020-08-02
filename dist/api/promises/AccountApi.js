"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../../ApiClient"));

var _AccountBalanceRequest = _interopRequireDefault(require("../../model/AccountBalanceRequest"));

var _AccountBalanceResponse = _interopRequireDefault(require("../../model/AccountBalanceResponse"));

var _Error = _interopRequireDefault(require("../../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Account service.
* @module api/AccountApi
* @version 1.3.1
*/
var AccountApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountApi. 
  * @alias module:api/AccountApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountApi(apiClient) {
    _classCallCheck(this, AccountApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get an Account Balance
   * Get an array of all Account Balances for an Account Identifier and the Block Identifier at which the balance lookup was performed.  Some consumers of account balance data need to know at which block the balance was calculated to reconcile account balance changes.  To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique Account Identifiers.  If the client supports it, passing nil AccountIdentifier metadata to the request should fetch all balances (if applicable).  It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
   * @param {module:model/AccountBalanceRequest} accountBalanceRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountBalanceResponse} and HTTP response
   */


  _createClass(AccountApi, [{
    key: "accountBalanceWithHttpInfo",
    value: function accountBalanceWithHttpInfo(accountBalanceRequest) {
      var postBody = accountBalanceRequest; // verify the required parameter 'accountBalanceRequest' is set

      if (accountBalanceRequest === undefined || accountBalanceRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'accountBalanceRequest' when calling accountBalance");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AccountBalanceResponse["default"];
      return this.apiClient.callApiPromised('/account/balance', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an Account Balance
     * Get an array of all Account Balances for an Account Identifier and the Block Identifier at which the balance lookup was performed.  Some consumers of account balance data need to know at which block the balance was calculated to reconcile account balance changes.  To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique Account Identifiers.  If the client supports it, passing nil AccountIdentifier metadata to the request should fetch all balances (if applicable).  It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * @param {module:model/AccountBalanceRequest} accountBalanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountBalanceResponse}
     */

  }, {
    key: "accountBalance",
    value: function accountBalance(accountBalanceRequest) {
      return this.accountBalanceWithHttpInfo(accountBalanceRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AccountApi;
}();

exports["default"] = AccountApi;