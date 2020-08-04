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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import MetadataRequest from '../model/MetadataRequest';
import NetworkListResponse from '../model/NetworkListResponse';
import NetworkOptionsResponse from '../model/NetworkOptionsResponse';
import NetworkRequest from '../model/NetworkRequest';
import NetworkStatusResponse from '../model/NetworkStatusResponse';

/**
* Network service.
* @module api/NetworkApi
* @version 1.4.1
*/
export default class NetworkApi {

    /**
    * Constructs a new NetworkApi. 
    * @alias module:api/NetworkApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get List of Available Networks
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * @param {module:model/MetadataRequest} metadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkListResponse} and HTTP response
     */
    networkListWithHttpInfo(metadataRequest) {
      let postBody = metadataRequest;
      // verify the required parameter 'metadataRequest' is set
      if (metadataRequest === undefined || metadataRequest === null) {
        throw new Error("Missing the required parameter 'metadataRequest' when calling networkList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NetworkListResponse;
      return this.apiClient.callApi(
        '/network/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get List of Available Networks
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * @param {module:model/MetadataRequest} metadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkListResponse}
     */
    networkList(metadataRequest) {
      return this.networkListWithHttpInfo(metadataRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Network Options
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkOptionsResponse} and HTTP response
     */
    networkOptionsWithHttpInfo(networkRequest) {
      let postBody = networkRequest;
      // verify the required parameter 'networkRequest' is set
      if (networkRequest === undefined || networkRequest === null) {
        throw new Error("Missing the required parameter 'networkRequest' when calling networkOptions");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NetworkOptionsResponse;
      return this.apiClient.callApi(
        '/network/options', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Network Options
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkOptionsResponse}
     */
    networkOptions(networkRequest) {
      return this.networkOptionsWithHttpInfo(networkRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Network Status
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkStatusResponse} and HTTP response
     */
    networkStatusWithHttpInfo(networkRequest) {
      let postBody = networkRequest;
      // verify the required parameter 'networkRequest' is set
      if (networkRequest === undefined || networkRequest === null) {
        throw new Error("Missing the required parameter 'networkRequest' when calling networkStatus");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NetworkStatusResponse;
      return this.apiClient.callApi(
        '/network/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Network Status
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * @param {module:model/NetworkRequest} networkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkStatusResponse}
     */
    networkStatus(networkRequest) {
      return this.networkStatusWithHttpInfo(networkRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
