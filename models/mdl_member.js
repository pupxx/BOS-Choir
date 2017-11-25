const knex = require('../db/connection.js');

class Member {
  static getAllMembers() {
    return knex('member');
  }

  static getOneMember(id) {
    return knex('member').where({ id });
  }
}

module.exports = Member;
