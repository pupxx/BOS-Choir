const knex = require('../../db/connection.js');

class Authorization {
  static findUser(id) {
    return knex('member')
      .where({ id })
      .first();
  }
}

module.exports = Authorization;
