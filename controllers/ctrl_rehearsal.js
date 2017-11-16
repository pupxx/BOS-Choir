var rehearsal = require('../models/mdl_rehearsal.js');

function getAllRehearsals(req, res){
    rehearsal.getAllRehearsals().then((rehearsals)=>{
        res.send(rehearsals)
    })
}

module.exports = {getAllRehearsals}