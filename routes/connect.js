const express = require('express');
const router  = express.Router();

router.get('/', function(req, res, next) {
  res.send('successfully connect with the server');
});

module.exports = router;
