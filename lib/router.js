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
      // console.log('methodArray:', methodArray);
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
      response.write('404: Resourse Not Found');
      response.end();
    };

  }

  listen() {
    var server = http.createServer(this.route());
    return server.listen.apply(server, arguments);
  };

  // serverRequestListener(request, response){
  // };

}

module.exports = Router;
