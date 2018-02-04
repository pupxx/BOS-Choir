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

module.exports = { checkIfAdmin };
