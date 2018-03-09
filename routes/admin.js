const express = require('express');

const router = express.Router();
const ctrl = require('../controllers/ctrl_admin');
const church = require('../controllers/ctrl_church');
const passport = require('passport');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

/* GET home page. */
router.get('/isAdmin', requireAuth, ctrl.checkIfAdmin);
router.get('/admin-member-list', requireAuth, ctrl.requireAdmin, ctrl.fetchAdminMemberList);
router.get('/single-member/:id', requireAuth, ctrl.requireAdmin, ctrl.getSingleMember);
router.get('/ward-branch-list', requireAuth, ctrl.requireAdmin, church.getAllChurches);
router.patch('/update-single-member/:id', requireAuth, ctrl.requireAdmin, ctrl.updateSingleMember);
router.delete('/remove-member/:id', requireAuth, ctrl.requireAdmin, ctrl.removeMember);
router.get('/add-ward-branch', requireAuth, ctrl.requireAdmin, ctrl.addWardBranch);
router.delete('/remove-ward/:id', requireAuth, ctrl.requireAdmin, ctrl.removeWardBranch);

module.exports = router;
