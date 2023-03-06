const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>1st Assignment</title></head>');
    res.write(
      '<body><h1>Home Page 1st Assginment</h1><form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      console.log(user);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/users');
    res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>1st Assignment</title></head>');
    res.write(`<body><h1>User Page</h1><ul><li>Users 1</li></ul></body>`);
    res.write('</html>');
    res.end();
  }
};

module.exports = requestHandler;
