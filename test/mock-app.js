var Router = require('../lib/router');
const http = require('http');

var app = new Router();

app.get('/', (request, response) => {
  response.send('This is the index page!');
});

app.get('/dogs', (request, response) => {
  response.send('woof!!!');
});

app.listen([8080]);
