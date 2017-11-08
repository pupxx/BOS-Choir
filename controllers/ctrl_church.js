const church  = require('../models/mdl_church.js');

function getAllChurches(req, res){
    church.getAllChurches().then((churches)=>{
        res.send(churches)
    })
}

module.exports = {getAllChurches}