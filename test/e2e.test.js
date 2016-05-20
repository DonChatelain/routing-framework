const Router = require('../lib/v-router');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

// var app = {};
var httpServerObject;

describe('Framework HTTP end-to-end test', () =>{

  describe('Mounts a mock app', () =>{

    before('Mock app file', (done) =>{
      httpServerObject = require('../test-data/mock-app');
      done();
    });


    it('Spins up client connection', (done) =>{
      const request = chai.request(httpServerObject);
      request
      .get('/dogs')
      .end((err,res) => {
        assert.equal(res.text, 'woof!!!');
        done();
      });

    });

    // Route handler fires when called - responds to 'request' listener

  });

});
