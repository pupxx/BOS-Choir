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
    res.send(singlePerformance);
  } catch (err) {
    next(err);
  }
}

async function performanceAttendanceTrue(req, res, next) {
  try {
    //  do some validation on req.body.id
    const performanceid = req.body.id;
    const userid = req.user.id;
    const attendance = await performance.performanceAttendanceTrue(userid, performanceid);
    res.send(attendance);
  } catch (err) {
    next(err);
  }
}

async function performanceAttendanceFalse(req, res, next) {
  try {
    const performanceID = req.params.id;
    const userid = req.user.id;
    const attendance = await performance.performanceAttendanceFalse(userid, performanceID);
    console.log(attendance, 'in the control file');
    res.send(attendance);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllPerformances,
  getOnePerformance,
  getAllProtectedPerformances,
  performanceAttendanceTrue,
  performanceAttendanceFalse
};
