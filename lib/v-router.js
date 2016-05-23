const http = require('http');
const extendResponse = require('./response-extension');

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
      const methodArray = this.reqMethods[request.method];
      if (methodArray) {
        const route = methodArray.find(function(method) {
          return method.path === request.url;
        });
        if (route) {
          response.send = extendResponse.send.bind(response);
          response.sendFile = extendResponse.sendFile.bind(response);
          route.handler(request, response);
          return;
        }
      }
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

module.exports = Router;
