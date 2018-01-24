const express = require('express');
const ctrl = require('../controllers/ctrl_member.js');
const passport = require('passport');
const passportService = require('../services/passport');

const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });

/* GET home page. */
router.get('/', requireAuth, ctrl.getAllMembers);
router.get('/profile', requireAuth, ctrl.getMemberProfile);
router.get('/member-info', requireAuth, ctrl.getOwnInfo);
// router.get('/:id', ctrl.getOneMember);
// router.get('/:id/profile', requireAuth, ctrl.getOneMember);

module.exports = router;
