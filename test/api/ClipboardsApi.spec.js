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
    instance = new KnowYourPlaceApi.ClipboardsApi();
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

  describe('ClipboardsApi', function() {
    describe('clipboardControllerAddArticleById', function() {
      it('should call clipboardControllerAddArticleById successfully', function(done) {
        //uncomment below and update the code to test clipboardControllerAddArticleById
        //instance.clipboardControllerAddArticleById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clipboardControllerCreate', function() {
      it('should call clipboardControllerCreate successfully', function(done) {
        //uncomment below and update the code to test clipboardControllerCreate
        //instance.clipboardControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clipboardControllerFindById', function() {
      it('should call clipboardControllerFindById successfully', function(done) {
        //uncomment below and update the code to test clipboardControllerFindById
        //instance.clipboardControllerFindById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clipboardControllerRemoveArticleById', function() {
      it('should call clipboardControllerRemoveArticleById successfully', function(done) {
        //uncomment below and update the code to test clipboardControllerRemoveArticleById
        //instance.clipboardControllerRemoveArticleById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clipboardControllerRemoveById', function() {
      it('should call clipboardControllerRemoveById successfully', function(done) {
        //uncomment below and update the code to test clipboardControllerRemoveById
        //instance.clipboardControllerRemoveById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
