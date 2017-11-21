var express = require('express');
var router = express.Router();
var authentication = require('../controllers/auth/ctrl_authentication.js')

/* GET home page. */
router.post('/', authentication.validateEmailAndPass );

module.exports = router;