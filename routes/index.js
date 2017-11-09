var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the BOS site.  This is the index page and we have no routes written for this page as of yet.');
});

module.exports = router;
