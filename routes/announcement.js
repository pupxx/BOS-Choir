var express = require('express');
var router = express.Router();
const announcement = require('../controllers/ctrl_announcement.js')

/* GET home page. */
router.get('/announcements', announcement.getAllAnnouncements);

module.exports = router;
