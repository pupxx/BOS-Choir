var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/ctrl_announcement.js')

/* GET home page. */
router.get('/', ctrl.getAllAnnouncements);

module.exports = router;
