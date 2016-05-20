const Router = require('../lib/v-router');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

var app = {};
var methods = ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'];

describe('Framework module test', () =>{

  it('Creates instance of router object', () =>{
    assert.isOk(app = new Router());
  });

  it('Has all reqMethod properties', () =>{
    methods.forEach((element) =>{
      assert.property(app.reqMethods, element);
    });
  });

  it('Saves a given route and handler function', (done) =>{
    app.get('/fake/path', function(){
      return 'success';
    });

    var myGetObject = app.reqMethods.GET.find((element) =>{
      return element.path === '/fake/path';
    });
    assert.equal(myGetObject.handler(), 'success');
    done();
  });


});
