const Router = require('../lib/router');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

var app = {};
var methods = ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'];

describe('Framework module test', () =>{

  before((done) =>{
    done();
  });

  describe('After initial start up', () =>{

    it('Creates instance of router object', () =>{
      app = new Router();
      methods.forEach((element) =>{
        assert.property(app.reqMethods, element);
      });
    });

    it('Has all reqMethod properties', () =>{
      methods.forEach((element) =>{
        if (!app.reqMethods[element]) assert.isOk(false);
      });
    });

    it('Saves a given route', () =>{
      app.get('/fake/path', function(){
        console.log('a handler in get fires');
      }
    );
      var myGetObject = app.reqMethods.GET.find((element) =>{
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
