const performance = require('../models/mdl_performance.js');

async function getAllPerformances(req, res, next) {
  try {
    const performances = await performance.getAllPerformances();
    res.send(performances);
  } catch (err) {
    next(err);
  }
}

async function getAllProtectedPerformances(req, res, next) {
  const { id } = req.user;
  try {
    const performances = await performance.getMembersPerformances(id);
    res.send(performances);
  } catch (err) {
    next(err);
  }
}

async function getOnePerformance(req, res, next) {
  try {
    const { id } = req.params;
    const singlePerformance = await performance.getOnePerformance(id);
    console.log(singlePerformance);
    res.send(singlePerformance);
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllPerformances, getOnePerformance, getAllProtectedPerformances };
