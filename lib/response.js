
// // response.location = function(url) {
  
// // };

// // res.sendFile = function sendFile(path, options, callback) {
// //   var done = callback;
// //   var req = this.req;
// //   var res = this;
// //   var next = req.next;
// //   var opts = options || {};

// //   if (!path) {
// //     throw new TypeError('path argument is required to res.sendFile');
// //   }

// //   // support function as second arg
// //   if (typeof options === 'function') {
// //     done = options;
// //     opts = {};
// //   }

// //   if (!opts.root && !isAbsolute(path)) {
// //     throw new TypeError('path must be absolute or specify root to res.sendFile');
// //   }

// //   // create file stream
// //   var pathname = encodeURI(path);
// //   var file = send(req, pathname, opts);

// //   // transfer
// //   sendfile(res, file, opts, function (err) {
// //     if (done) return done(err);
// //     if (err && err.code === 'EISDIR') return next();

// //     // next() all but write errors
// //     if (err && err.code !== 'ECONNABORTED' && err.syscall !== 'write') {
// //       next(err);
// //     }
// //   });
// // };