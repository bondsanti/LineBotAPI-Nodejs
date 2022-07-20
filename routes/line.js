var express = require('express');
var router = express.Router();

// http://localhost:4000/..../callback
router.get('/callback', function(req, res, next) {
  res.send('Line Callback');
});

module.exports = router;
