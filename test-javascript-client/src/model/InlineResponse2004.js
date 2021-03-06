(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './InlineResponse2004Data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2004Data'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.InlineResponse2004 = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.InlineResponse2004Data);
  }
}(this, function(ApiClient, InlineResponse2004Data) {
  'use strict';

  /**
   * The InlineResponse2004 model module.
   * @module model/InlineResponse2004
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = InlineResponse2004Data.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/InlineResponse2004Data} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
