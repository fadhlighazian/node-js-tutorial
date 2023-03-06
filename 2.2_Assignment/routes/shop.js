const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  /*
  __dirname => The whole project folder
  ../       => up 1 level
  views     => views folder
  shop.html => execute file
   */
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
