const Router = require('../router');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

var app = {};
var methods = ['get', 'post', 'delete', 'patch', 'put'];

describe('Framework user', () =>{

  before((done) =>{
    done();
  });

  describe('After initial start up', () =>{

    it('Creates instance of router object', () =>{
      app = new Router();
      methods.forEach((element) =>{
        assert.property(app, element);
      });
    });

    it('Has all reqMethod properties', () =>{
      methods.forEach((element) =>{
        if (!app.reqMethods[element]) assert.isOk(false);
      });
    });

    it('Saves a given route', () =>{
      app.get('/fake/path');
      var myGetObject = app.reqMethods.get.find((element) =>{
        return element.path === '/fake/path';
      });
      assert.isOk(myGetObject);
    });

    // Successfully responds to saved route by invoking response object in callback parameters
    // Can parse information from request object.



    // ???
    // Returns 404 status if path is unrecognized (need a client?)
    // e2e test initiates HTTP requests, gets response





  });
});
