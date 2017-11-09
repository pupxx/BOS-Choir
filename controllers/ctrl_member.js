const member = require('../models/mdl_member.js');

function getAllMembers(req, res){
    member.getAllMembers().then((members)=>{
        res.send(members)
    })
}

function getOneMember(req, res){
    var id = req.params.id
    member.getOneMember(id).then((member)=>{
        res.send(member)
    })
}

module.exports = {getAllMembers, getOneMember};