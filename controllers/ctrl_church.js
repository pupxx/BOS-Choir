const church = require('../models/mdl_church.js');

async function getAllChurches(req, res, next) {
  try {
    const churches = await church.getAllChurches();
    res.send(churches);
  } catch (err) {
    next(err);
  }
}

async function getOneChurch(req, res, next) {
  try {
    const { id } = req.params;
    const singleChurch = await church.getOneChurch(id);
    res.send(singleChurch);
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllChurches, getOneChurch };
