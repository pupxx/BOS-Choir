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

async function getSinglePerformance(req, res, next) {
  const { id } = req.params;
  try {
    const singlePerformance = await performance.getSinglePerformance(id);
    res.send(singlePerformance);
  } catch (err) {
    next(err);
  }
}

async function performanceAttendanceTrue(req, res, next) {
  try {
    if (typeof req.body.id !== 'number') {
      const err = 'Performance not found';
      next(err);
    } else {
      const performanceid = req.body.id;
      const userid = req.user.id;
      const attendance = await performance.performanceAttendanceTrue(userid, performanceid);
      res.send(attendance);
    }
  } catch (err) {
    next(err);
  }
}

async function performanceAttendanceFalse(req, res, next) {
  try {
    const performanceID = req.params.id;
    const userid = req.user.id;
    const attendance = await performance.performanceAttendanceFalse(userid, performanceID);
    res.send(attendance);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllPerformances,
  getSinglePerformance,
  getAllProtectedPerformances,
  performanceAttendanceTrue,
  performanceAttendanceFalse
};
