const performance = require('../models/mdl_performance.js');

async function getAllPerformances(req, res){
  try{
    const performances = await performance.getAllPerformances()
      res.send(performances)
  }catch(err) {
    next(err)
  }
}

async function getOnePerformance(req, res){
  try{
    let id = req.params.id
    const singlePerformance = await performance.getOnePerformance(id)
      res.send(singlePerformance)
  }catch(err) {
    next(err)
  }
}

module.exports = {getAllPerformances, getOnePerformance}
