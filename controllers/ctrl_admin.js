const admin = require('../models/mdl_admin');

async function checkIfAdmin(req, res, next) {
  try {
    const { id } = req.user;
    const isAdmin = await admin.checkIfAdmin(id);
    res.send(isAdmin);
  } catch (error) {
    next(error);
  }
}

async function requireAdmin(req, res, next) {
  const isAdmin = req.user.admin;
  if (isAdmin) {
    next();
  } else {
    const err = { status: 401, message: 'Unauthorized' };
    next(err);
  }
}

async function fetchAdminMemberList(req, res, next) {
  try {
    const memberList = await admin.fetchAdminMemberList();
    res.send(memberList);
  } catch (error) {
    next(error);
  }
}

module.exports = { checkIfAdmin, requireAdmin, fetchAdminMemberList };
