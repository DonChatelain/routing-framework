const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

// var app = {};
var httpServerObject;

describe('Framework HTTP end-to-end test', () =>{

  describe('Mounts a mock application', () =>{

    before('Mock app file', (done) =>{
      httpServerObject = require('../test-data/mock-app');
      done();
    });

    it('Simulates a client \'get\' request to mock app', (done) =>{
      const request = chai.request(httpServerObject);
      request
      .post('/combo')
      .end((err,res) => {
        assert.equal(res.text, 'first');
        done();
      });
    });

  });
});
