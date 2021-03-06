const knex = require('../../db/connection.js');

class Signup {
  static checkForUser(email) {
    return knex('member')
      .where({ email })
      .first();
  }

  static addNewUser(user) {
    return knex('member').insert(user, '*');
  }
}

module.exports = Signup;
