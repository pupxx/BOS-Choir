var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrl_rehearsal.js')

/* GET home page. */
router.get('/', ctrl.getAllRehearsals );

module.exports = router;
