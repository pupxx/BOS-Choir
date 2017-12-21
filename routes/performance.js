const express = require('express');
const ctrl = require('../controllers/ctrl_performance');
const passport = require('passport');
const passportService = require('../services/passport');

const router = express.Router();

const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/', ctrl.getAllPerformances);
router.get('/member/landing', requireAuth, ctrl.getAllProtectedPerformances);
router.get('/:id', requireAuth, ctrl.getOnePerformance);

module.exports = router;
