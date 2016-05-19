// const url = require('url');

class Router {
  constructor() {
    this.reqMethods = {
      get: [],
      post: [],
      patch: [],
      delete: [],
      put: []
    };
  }

  get(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.get;
    this.reqMethods.get.push({path: _url, handler: handler});
    return this;
  }
  post(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.post;
    this.reqMethods.post.push({path: _url, handler: handler});
    return this;
  }
  patch(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.patch;
    this.reqMethods.patch.push({path: _url, handler: handler});
    return this;
  }
  delete(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.delete;
    this.reqMethods.delete.push({path: _url, handler: handler});
    return this;
  }
  put(_url, handler) {
    // extract proper pathname from url and push to this.reMethods.put;
    this.reqMethods.put.push({path: _url, handler: handler});
    return this;
  }

  route() {

    // big block that before existed in createServer anonymous function

  }

}

module.exports = Router;
