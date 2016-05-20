const http = require('http');

const server = {};

server.start = function(handler, port) {
  http.createServer(handler)
      .listen(port, () => console.log(`listening on port: ${port}`));
};

module.exports = server;
