const knex = require('../db/connection.js');

class Announcement {
  static getAllAnnouncements() {
    return knex('announcement');
  }
}

module.exports = Announcement;
