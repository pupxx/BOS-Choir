const performance = require('../models/mdl_performance.js');

function getAllPerformances(req, res){
    performance.getAllPerformances().then((performances)=>{
        res.send(performances)
    })
}

function getOnePerformance(req, res){
    let id = req.params.id
    performance.getOnePerformance(id).then((performance)=>{
        res.send(performance)
    })
}

module.exports = {getAllPerformances, getOnePerformance}