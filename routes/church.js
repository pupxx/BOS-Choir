var express = require('express');
var router = express.Router();
const church = require('../controllers/church.js')

/* GET home page. */
router.get('/churches', church.getAllChurhes);

module.exports = router;
