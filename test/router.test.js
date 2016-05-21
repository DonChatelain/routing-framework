const Router = require('../lib/router');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

var app = {};
var methods = ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'];

describe('Framework module test', () =>{

  it('Creates an instance of router object', () =>{
    assert.isOk(app = new Router());
  });

  it('Has all reqMethod properties', () =>{
    methods.forEach((element) =>{
      assert.property(app.reqMethods, element);
    });
  });

  it('Saves a given route and handler function', done =>{
    // Save a route
    app.get('/fake/path', function(){
      return 'success';
    });
    // Check that it is accessible in the reqMethods property
    var myGetObject = app.reqMethods.GET.find((element) =>{
      return element.path === '/fake/path';
    });
    assert.equal(myGetObject.handler(), 'success');
    done();
  });

  it('Route handler writes to server response', () =>{
    // Save a route
    app.get('/fake/path/2', function(request, response){
      response.write('success');
    });
    // Check that it fires handler and writes to response
    var request = {method: 'GET', url: '/fake/path/2'};
    var response = {
      writeHead: ()=>{},
      end: ()=>{},
      write: body =>{
        assert.equal(body, 'success');
      }
    };
    var requestListener = app.route();
    requestListener(request, response);
  });

  it('Server writes 404 error when given an unrecognized path', () =>{
    var request = {method: 'GET', url: '/unrecognized/path'};
    var response = {
      writeHead: body =>{
        assert.equal(body, 404);
      },
      end: ()=>{},
      write: body =>{
        assert.equal(body, '404: Resource Not Found');
      }
    };
    var requestListener = app.route();
    requestListener(request, response);
  });


});
