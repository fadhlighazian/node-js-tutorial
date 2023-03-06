const express = require('express');
const bodyParser = require('body-parser'); // Body Parser is a npm packages
const path = require('path'); // Path

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // for static file

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// set 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Bisa langsung app.listen(port)
app.listen(3000);
