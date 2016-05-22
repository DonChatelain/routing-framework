const Router = require('../lib/v-router');
const extendResponse = require('../lib/response-extension');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

var app = {};
var methods = ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'];
var response = {
  writeHead: () =>{},
  end: ()=>{},
  write: () =>{},
  on: ()=>{},
  prependListener: ()=>{},
  once:()=>{},
  emit:()=>{}
};
response.send = extendResponse.send.bind(response);
response.sendFile = extendResponse.sendFile.bind(response);

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
    response.write = body =>{
      assert.equal(body, 'success');
    };
    var requestListener = app.route();
    requestListener(request, response);
  });

  it('Server writes 404 error when given an unrecognized path', () =>{
    var request = {method: 'GET', url: '/unrecognized/path'};
    response.writeHead = body =>{
      assert.equal(body, 404);
    };
    response.write = body =>{
      assert.equal(body, '404: Resource Not Found');
    };
    var requestListener = app.route();
    requestListener(request, response);
  });

  it('Response.send() sends JSON object with header: application/json', () => {
    // Save a route
    app.get('/dogs/sadie', (request, response) =>{
      response.send({breed: 'corgi', name: 'Sadie'});
    });
    // Check that it returns a response with a JSON body
    var request = {method: 'GET', url: '/dogs/sadie'};
    response.setHeader = (contentType, value) =>{
      assert.equal(value, 'application/json');
    };
    response.write = body =>{
      var obj = JSON.parse(body);
      assert.equal(obj.breed, 'corgi');
      assert.equal(obj.name, 'Sadie');
    };
    var requestListener = app.route();
    requestListener(request, response);
  });

  it('Response.send() sends string with header: text/html', () => {
    // Save a route
    app.get('/', (request, response) => {
      response.send('This is the index page!');
    });
    // Check that it returns a response with text body
    var request = {method: 'GET', url:'/'};
    response.setHeader = (contentType, value) =>{
      assert.equal(value, 'text/html');
    };
    response.write = body =>{
      assert.equal(body, 'This is the index page!');
    };
    var requestListener = app.route();
    requestListener(request, response);
  });

  it('Response.sendFile() sends JSON file with proper Header', () => {
    // Save a route
    app.get('/dogs', (request, response) =>{
      response.sendFile('/test-data/dogs.json');
    });
    // Check that ir returns a JSON file
    var request = {method: 'GET', url: '/dogs'};
    response.writeHead = (body, content) =>{
      assert.equal(body, 200);
      assert.equal(content['Content-Type'], 'application/json');
    };
    response.write = body =>{
      assert.equal(body.breeds[0], 'corgi');
    };
    var requestListener = app.route();
    requestListener(request, response);
  });

});
