const knex = require('../db/connection.js');

class Admin {
  static async checkIfAdmin(id) {
    const isAdmin = await knex('member')
      .select('admin')
      .where({ id });
    return isAdmin;
  }

  static async fetchAdminMemberList() {
    const singleMember = await knex('member')
      .select(
        'member.id as memberID',
        'firstname',
        'lastname',
        'address1',
        'address2',
        'city',
        'prov',
        'postal',
        'phone',
        'email',
        'churchname',
        'part',
        'admin'
      )
      .innerJoin('church', 'church.id', 'member.church_id');
    return singleMember;
  }
}

module.exports = Admin;
