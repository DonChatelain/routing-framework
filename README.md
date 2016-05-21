[![Build Status](https://travis-ci.org/DonChatelain/routing-framework.svg?branch=master)](https://travis-ci.org/DonChatelain/routing-framework)

# Veloci-Router
A minimal Express-style router with response handling convenience methods.

### Features
* Lightweight router
* Convenience methods .send() and .sendFile handle responses in JSON and HTML
* Includes full testing suite
* Supports request methods: GET, POST, PUT, PATCH, and DELETE

### Installation and Usage
`npm install --save veloci-router`

```
var Router = require('v-router');
var app = new Router();

app.get('/your/path', (request, response) => {
  // Your handler code here
});

app.patch('/your/path/resource', (request, response) => {
  // Your handler code here
});

```

### Convience Methods
#### response.send(*data*)
Combines res.write(), res.end(), and res.writeHead() to fit the data type being sent. 
The argument *data* can be a string or a JSON Object.
```
app.get('/', (request, response) => {
  response.send('This is the index page!');
});
```
#### response.sendFile(*path*)
Uses a readStream to pass a file to the response object. Automatically adjusts header types accordingly
(e.g. raptors.json, index.html, README.md) Argument *path* must be absolute.
```
app.get('/dogs', (request, response) => {
  response.sendFile('./test-data/dogs.json');
});
```


### Testing
To start the test suite, install dependencies and then run `npm test`.

---
Contributors:
- Allison Davis
- Dave Hanagan
- Don Chatelain
