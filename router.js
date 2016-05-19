const url = require('url');

class Router {
  constructor() {
    this.reqMethods = {
      get: [],
      post: [],
      patch: [],
      delete: []
    };
  }

  get(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.get;
    handler();
  }
  post(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.post;
    handler();
  }
  patch(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.patch;
    handler();
  }
  delete(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.delete;
    handler();
  }
  put(_url, handler) {
    // extract proper pathname from url and push to this.reMethods.put;
    handler();
  }

  route() {

    // big block that before existed in createServer anonymous function

  }

}

module.exports = Router;
