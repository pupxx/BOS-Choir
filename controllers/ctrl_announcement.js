const announcement = require('../models/mdl_announcement.js')

async function getAllAnnouncements(req, res, next) {
  try{
    const announcements = await announcement.getAllAnnouncements()
      res.send(announcements)  
  }catch(err){
    next(err)
  }
}

module.exports = { getAllAnnouncements }
