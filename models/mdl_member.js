const knex = require('../db/connection.js')

class Member {
  constructor() {

  }

  static getAllMembers() {
    return knex('member')
  }

  static getOneMember(id){
    console.log('!!!!!!');
    return knex('member').where({id});
  }


}

module.exports = Member
