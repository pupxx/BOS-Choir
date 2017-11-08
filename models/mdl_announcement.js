const knex = require('../db/connection.js')

class Announcement {
  constructor() {

  }

  static getAllAnnouncements() {
    return knex('announcement')
  }

}

module.exports = Announcement
