var Router = require('../lib/v-router');
var app = new Router();

app.get('/', (request, response) => {
  response.send('This is the index page!');
});

app.get('/dogs', (request, response) => {
  response.sendFile('./test-data/dogs.json');
});

var httpServerObject = app.listen([5050]);

module.exports = httpServerObject;

