var express = require('express');
var router = express.Router();
const church = require('../controllers/ctrl_church.js')

/* GET home page. */
router.get('/', church.getAllChurches);

module.exports = router;
