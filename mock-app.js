var Router = require('./lib/router');
var server = require('./lib/http-server');

var app = new Router();

app.get('/', (request, response) => {
  response.write('index page!');
  response.end();
});

app.get('/dogs', (request, response) => {
  response.write('woof!');
  response.end();
});

server.start(app.route(), 8080);