const knex = require('../db/connection.js');

class Church {
  static getAllChurches() {
    return knex('church');
  }

  static getOneChurch(id) {
    return knex('church').where({ id });
  }
}

module.exports = Church;
