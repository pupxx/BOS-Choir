const knex = require('../db/connection.js');

class Admin {
  static async checkIfAdmin(id) {
    const isAdmin = await knex('member')
      .select('admin')
      .where({ id });
    return isAdmin;
  }
}

module.exports = Admin;
