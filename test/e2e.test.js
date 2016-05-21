const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

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
    
    it('response.send() sends JSON object with header: application/json', done => {
      const request = chai.request(httpServerObject);
      request
          .get('/dogs/sadie')
          .end((err, response) => {
            assert.equal(response.header['content-type'], 'application/json');
            done();
          });
    });
    
    it('response.send() sends string with header: text/html', done => {
      const request = chai.request(httpServerObject);
      request
          .get('/')
          .end((err, response) => {
            assert.equal(response.header['content-type'], 'text/html');
            done();
          });
    });
    
    it('response.sendFile() sends JSON file with proper Header', done => {
      const request = chai.request(httpServerObject);
      const expected = 'corgi';
      request
          .get('/dogs')
          .end((err, response) => {
            if (err) throw err;
            assert.equal(response.header['content-type'], 'application/json');
            assert.equal(response.body.breeds[0], expected);
            done();
          });
    });

  });
});
