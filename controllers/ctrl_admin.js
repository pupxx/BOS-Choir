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
  const { id } = req.user;
  try {
    const isAdmin = await admin.checkIfAdmin(id);
    if (isAdmin[0].admin) {
      next();
    } else {
      const error = { status: 401, message: 'Unauthorized' };
      res.send(error);
    }
  } catch (error) {
    next(error);
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
