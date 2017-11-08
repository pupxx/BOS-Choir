const announcement = require('../models/mdl_announcement.js')

function getAllAnnouncements(req, res, next) {
  announcement.getAllAnnouncements().then((announcements) => {
    res.send(announcements)
  })
}

module.exports = { getAllAnnouncements }
