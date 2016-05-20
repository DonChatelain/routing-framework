const Router = require('../lib/router');
const chai = require('chai');
const chaiHttp = require('chai-http');
// const http = require('http');
const assert = chai.assert;
chai.use(chaiHttp);

var app = {};

describe('Framework HTTP end-to-end test', () =>{

  describe('Mounts server', () =>{

    it('Mounts server and calls listen method', () =>{
      app = new Router();
    });

    it('Spins up client connection', () =>{
      const request = chai.request(app.listen(5050));
      request
          .get('/')
          .end((err,res) => {
            // var resOrErr = err || res;
            assert.isOk(false);
            done();
          });
    });

    // Route handler fires when called - responds to 'request' listener


  });

});
