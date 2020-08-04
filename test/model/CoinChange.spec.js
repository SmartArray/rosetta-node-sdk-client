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
    instance = new Rosetta.CoinChange();
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

  describe('CoinChange', function() {
    it('should create an instance of CoinChange', function() {
      // uncomment below and update the code to test CoinChange
      //var instane = new Rosetta.CoinChange();
      //expect(instance).to.be.a(Rosetta.CoinChange);
    });

    it('should have the property coinIdentifier (base name: "coin_identifier")', function() {
      // uncomment below and update the code to test the property coinIdentifier
      //var instane = new Rosetta.CoinChange();
      //expect(instance).to.be();
    });

    it('should have the property coinAction (base name: "coin_action")', function() {
      // uncomment below and update the code to test the property coinAction
      //var instane = new Rosetta.CoinChange();
      //expect(instance).to.be();
    });

  });

}));
