const express = require('express');
const ctrl = require('../controllers/ctrl_member.js');
const passport = require('passport');
const passportService = require('../services/passport');

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

/* GET home page. */
router.get('/', requireAuth, (req, res) => {
  console.log('Hi there');
});
router.get('/:id', ctrl.getOneMember);

module.exports = router;
