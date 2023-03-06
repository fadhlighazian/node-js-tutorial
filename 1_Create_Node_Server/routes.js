// Core Modules
const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    // Sending Response
    res.write('<html>');
    res.write('<head><title>Enter a Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message, (err) => {
        res.statusCode = 302; // redirect status code
        res.setHeader('Location', '/'); // redirect to "/"
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Response from Node Server</title></head>');
  res.write('<body><h1>My First Response from node server</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;
