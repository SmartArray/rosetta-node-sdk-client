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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Rosetta);
  }
}(this, function(expect, Rosetta) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Rosetta.Allow();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Allow', function() {
    it('should create an instance of Allow', function() {
      // uncomment below and update the code to test Allow
      //var instane = new Rosetta.Allow();
      //expect(instance).to.be.a(Rosetta.Allow);
    });

    it('should have the property operationStatuses (base name: "operation_statuses")', function() {
      // uncomment below and update the code to test the property operationStatuses
      //var instane = new Rosetta.Allow();
      //expect(instance).to.be();
    });

    it('should have the property operationTypes (base name: "operation_types")', function() {
      // uncomment below and update the code to test the property operationTypes
      //var instane = new Rosetta.Allow();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new Rosetta.Allow();
      //expect(instance).to.be();
    });

    it('should have the property historicalBalanceLookup (base name: "historical_balance_lookup")', function() {
      // uncomment below and update the code to test the property historicalBalanceLookup
      //var instane = new Rosetta.Allow();
      //expect(instance).to.be();
    });

  });

}));
