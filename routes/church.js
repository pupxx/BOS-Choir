var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/ctrl_church.js')

/* GET home page. */
router.get('/', ctrl.getAllChurches);
router.get('/:id', ctrl.getOneChurch);

module.exports = router;
