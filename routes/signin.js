var express = require('express');
var router = express.Router();
var authentication = require('../controllers/auth/ctrl_authentication.js');
const passportService = require('../services/passport.js');
const passport = require('passport');

const requireSignin = passport.authenticate('local', {session: false})

/* GET home page. */
router.post('/', requireSignin);

module.exports = router;