const express = require('express');

const router = express.Router();
const authentication = require('../controllers/auth/ctrl_authentication.js');

/* GET home page. */
router.post(
  '/',
  authentication.validateEmailAndPass,
  authentication.checkForUser,
  authentication.addNewUser
);

module.exports = router;
