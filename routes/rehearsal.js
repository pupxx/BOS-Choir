const express = require('express');

const router = express.Router();
const ctrl = require('../controllers/ctrl_rehearsal.js');

/* GET home page. */
router.get('/', ctrl.getAllRehearsals);

module.exports = router;
