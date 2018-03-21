const knex = require('../db/connection.js');

class Rehearsal {
  static getAllRehearsals() {
    return knex('rehearsal')
      .select('*', 'rehearsal.id as rehearsalID', 'church_id as churchID')
      .innerJoin('church', 'church_id', 'church.id')
      .limit(12);
  }
}

module.exports = Rehearsal;
