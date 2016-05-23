const fs = require('fs');

function send(body) {  // response.send() definition
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

function sendFile(path) {  // response.sendFile()
  if (!path) {
    this.statusCode = 400;
    this.send('Error, no file specified to be sent');
    return console.error('You must pass a path to response.sendFile()');
  }
  var fileType, code;
  var pathArr = path.split('.');
  var ext = pathArr[pathArr.length - 1];
  if (ext === 'json') {
    fileType = 'application/json';
    code = 200;
  } else if (ext === 'html') {
    fileType = 'text/html';
    code = 200;
  } else {
    fileType = 'text/html';
    code = 200;
  }
  this.writeHead(code, {'Content-Type': fileType});
  fs.createReadStream(path).pipe(this);
  return this;
};

module.exports.send = send;
module.exports.sendFile = sendFile;
