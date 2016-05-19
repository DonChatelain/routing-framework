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

    it('Has methods that returns callbacks', (done) =>{

      var count = 0;
      methods.forEach((element) =>{
        app[element]('', () =>{
          count += 1;
          if (count === methods.length) done();
        });
      });
    });

    it('Returns 400 status if path is malformed', (done) =>{
      
    });



  });
});
