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
  }
  post(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.post;
  }
  patch(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.patch;
  }
  delete(_url, handler) {
    // extract proper pathname from url and push to this.reqMethods.delete;
  }
  
  route() {
    
    // big block that before existed in createServer anonymous function
    
  }
  
}