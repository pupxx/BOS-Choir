const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ctrl_performance')

router.get('/', ctrl.getAllPerformances);
router.get('/:id', ctrl.getOnePerformance)

module.exports = router;
