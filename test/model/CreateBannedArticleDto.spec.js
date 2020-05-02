/**
 * KnowYourPlace API
 * API do 'Aplikacja dla studentów zagranicznych'.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KnowYourPlaceApi);
  }
}(this, function(expect, KnowYourPlaceApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnowYourPlaceApi.CreateBannedArticleDto();
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

  describe('CreateBannedArticleDto', function() {
    it('should create an instance of CreateBannedArticleDto', function() {
      // uncomment below and update the code to test CreateBannedArticleDto
      //var instane = new KnowYourPlaceApi.CreateBannedArticleDto();
      //expect(instance).to.be.a(KnowYourPlaceApi.CreateBannedArticleDto);
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new KnowYourPlaceApi.CreateBannedArticleDto();
      //expect(instance).to.be();
    });

    it('should have the property articleId (base name: "articleId")', function() {
      // uncomment below and update the code to test the property articleId
      //var instane = new KnowYourPlaceApi.CreateBannedArticleDto();
      //expect(instance).to.be();
    });

  });

}));
