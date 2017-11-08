const knex = require('../db/connection.js')

class Member {
  constructor() {

  }

  static getAllMembers() {
    return knex('member')
  }

}

module.exports = Member
