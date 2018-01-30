const knex = require('../db/connection.js');

class Member {
  static getAllMembers() {
    return knex('member');
  }

  static getOwnInfo(id) {
    return knex('member')
      .select(
        'id as memberID',
        'firstname',
        'lastname',
        'address1',
        'address2',
        'city',
        'postal',
        'phone',
        'part'
      )
      .where({ id });
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

  static async updateProfile(id, data) {
    const { firstname, lastname, address1, address2, city, postal, phone, churchname, part } = data;
    const dataObj = { firstname, lastname, address1, address2, city, postal, phone, part };

    const church = await knex('church').where({ churchname });
    dataObj.church_id = church[0].id;

    const updatedMember = await knex('member')
      .update(dataObj)
      .returning('id')
      .where({ id });
    return updatedMember;
  }
}

module.exports = Member;
