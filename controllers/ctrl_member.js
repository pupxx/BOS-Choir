const member = require('../models/mdl_member.js');

async function getAllMembers(req, res, next) {
  try {
    const members = await member.getAllMembers();
    res.send(members);
  } catch (err) {
    next(err);
  }
}

async function getOneMember(req, res, next) {
  try {
    const { id } = req.params;
    const singleMember = await member.getOneMember(id);
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

module.exports = { getAllMembers, getOneMember, getMemberProfile };
