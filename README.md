[![Build Status](https://travis-ci.org/DonChatelain/routing-framework.svg?branch=master)](https://travis-ci.org/DonChatelain/routing-framework)

# Veloci-Router
A minimal Express-style router with response handling convenience methods.

### Features
* lightweight router
* Convenience methods .send and .sendFile handle responses in JSON and HTML
* Includes full testing suite

### Documentation
#### res.send(res)
```
app.get('/', (request, response) => {
  response.send('This is the index page!');
});
```
#### res.sendFile(res)
```
app.get('/dogs', (request, response) => {
  response.sendFile('./test-data/dogs.json');
});
```

### Installation and Usage
`npm install --save veloci-router`

```
var Router = require('v-router');
var app = new Router();

```
### Testing
To start the test suite, install dependencies and then run `npm test`.

---
Contributors:
- Allison Davis
- Dave Hanagan
- Don Chatelain
