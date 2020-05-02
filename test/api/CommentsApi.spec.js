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
    instance = new KnowYourPlaceApi.CommentsApi();
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

  describe('CommentsApi', function() {
    describe('commentControllerCreate', function() {
      it('should call commentControllerCreate successfully', function(done) {
        //uncomment below and update the code to test commentControllerCreate
        //instance.commentControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('commentControllerFindByArticleId', function() {
      it('should call commentControllerFindByArticleId successfully', function(done) {
        //uncomment below and update the code to test commentControllerFindByArticleId
        //instance.commentControllerFindByArticleId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('commentControllerFindByAuthorId', function() {
      it('should call commentControllerFindByAuthorId successfully', function(done) {
        //uncomment below and update the code to test commentControllerFindByAuthorId
        //instance.commentControllerFindByAuthorId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
