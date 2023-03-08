const http = require('http');

// Create Express App
const express = require('express');
const app = express();

// Add a middleware function
app.use('/add-product', (req, res, next) => {
  console.log('In the middleware');
  res.send('<h1>The "Add Product" Page</h1>');
  // next(); // Allows the request to continue to the next middleware in line
});

// Middleware functions are executed sequentially,
// therefore the order of middleware inclusion is important.
app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express.js</h1>');
});

// create server
const server = http.createServer(app);

// listen to the server
server.listen(3001);
