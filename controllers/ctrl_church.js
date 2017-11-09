const church  = require('../models/mdl_church.js');

function getAllChurches(req, res){
    church.getAllChurches().then((churches)=>{
        res.send(churches)
    })
}

function getOneChurch(req, res){
    var id = req.params.id;
    church.getOneChurch(id).then((church)=>{
        res.send(church)
    })
}

module.exports = {getAllChurches, getOneChurch}