var express = require('express');
var router = express.Router();

// http://localhost:4000/..../callback
router.post('/callback', function(req, res, next) {
  res.send('Line Callback');
});

module.exports = router;
