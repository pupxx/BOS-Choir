const express = require('express');

const router = express.Router();
const ctrl = require('../controllers/ctrl_church.js');
const passport = require('passport');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

/* GET home page. */
router.get('/', requireAuth, ctrl.getAllChurches);
router.get('/:id', requireAuth, ctrl.getOneChurch);

module.exports = router;
