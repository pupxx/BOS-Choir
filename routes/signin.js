const express = require('express');

const router = express.Router();
const authentication = require('../controllers/auth/ctrl_authentication.js');
const passportService = require('../services/passport.js');
const passport = require('passport');

const requireSignin = passport.authenticate('local', { session: false });

/* GET home page. */
router.post('/', authentication.validateEmailAndPass, requireSignin, authentication.signin);

module.exports = router;
