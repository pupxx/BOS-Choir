const knex = require('../db/connection.js');

class Member {
  static getAllMembers() {
    return knex('member');
  }

  static getOneMember(id) {
    return knex('member').where({ id });
  }

  static async getMemberProfile(id) {
    const singleMember = await knex('member')
      .select(
        'member.id as memberID',
        'firstname',
        'lastname',
        'address1',
        'address2',
        'city',
        'postal',
        'phone',
        'email',
        'churchname',
        'part'
      )
      .innerJoin('church', 'church.id', 'member.church_id')
      .where('member.id', id);
    return singleMember;
  }
}

module.exports = Member;
