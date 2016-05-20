const http = require('http');

class Router {
  constructor() {
    this.reqMethods = {
      GET: [],
      POST: [],
      PUT: [],
      PATCH: [],
      DELETE: []
    };
  }

  get(path, handler) {
    this.reqMethods.GET.push({path, handler});
    return this;
  }
  post(path, handler) {
    this.reqMethods.POST.push({path, handler});
    return this;
  }
  put(path, handler) {
    this.reqMethods.PUT.push({path, handler});
    return this;
  }
  patch(path, handler) {
    this.reqMethods.PATCH.push({path, handler});
    return this;
  }
  delete(path, handler) {
    this.reqMethods.DELETE.push({path, handler});
    return this;
  }

  route() {
    return (request, response) => {
      const methodArray = this.reqMethods[request.method]; // get a list of handlers that client paired with paths
<<<<<<< HEAD
      // console.log('methodArray:', methodArray);
=======
>>>>>>> don-response
      if (methodArray) {
        const route = methodArray.find(function(method) { // finds item in array that contains the requested path
          return method.path === request.url;
        });
        if (route) {
          route.handler(request, response);
          return;
        }
      }
    //Handler and resource do not exist
      response.writeHead(404);
      response.write('404: Resource Not Found');
      response.end();
    };

  }

  listen(port) {
    var server = http.createServer(this.route());
    return server.listen.apply(server, port);
  };

}

http.ServerResponse.prototype.send = function(body) {  // response.send() definition  
  if (typeof body === 'string') {
    this.setHeader('Content-Type', 'text/html');
    this.write(body);
    this.end();
  } else if (typeof body === 'object') {
    this.setHeader('Content-Type', 'application/json');
    this.write(JSON.stringify(body));
    this.end();
  } else {
    this.statusCode = 400;
    this.write('400 Bad Response');
    this.end();
  }
  return this;
};

module.exports = Router;
