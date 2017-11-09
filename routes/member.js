var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/ctrl_member.js')

/* GET home page. */
router.get('/', ctrl.getAllMembers);
router.get('/:id', ctrl.getOneMember);

module.exports = router;
