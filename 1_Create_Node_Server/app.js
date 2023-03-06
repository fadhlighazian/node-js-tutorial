// Core Modules
const http = require('http');

// import ./routes.js file
const routes = require('./routes');

// Creating a node server
const server = http.createServer(routes);

server.listen(3000);
