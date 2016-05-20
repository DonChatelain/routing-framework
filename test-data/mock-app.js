var Router = require('../lib/router');
var server = require('./http-server');

var app = new Router();

app.get('/', (request, response) => {
  response.write('index page!');
  response.end();
});

app.get('/dogs', (request, response) => {
  response.write('woof!');
  response.end();
});

var httpServerObject = app.listen(5050);

module.exports = httpServerObject;
