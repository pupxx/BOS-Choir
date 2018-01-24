const member = require('../models/mdl_member.js');

async function getAllMembers(req, res, next) {
  try {
    const members = await member.getAllMembers();
    res.send(members);
  } catch (err) {
    next(err);
  }
}

async function getOwnInfo(req, res, next) {
  try {
    const { id } = req.user;
    const singleMember = await member.getOwnInfo(id);
    res.send(singleMember);
  } catch (err) {
    next(err);
  }
}

async function getMemberProfile(req, res, next) {
  const { id } = req.user;
  try {
    const singleMember = await member.getMemberProfile(id);
    res.send(singleMember);
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllMembers, getOwnInfo, getMemberProfile };
