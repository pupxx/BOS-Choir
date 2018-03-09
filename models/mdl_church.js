const knex = require('../db/connection.js');

class Church {
  static getAllChurches() {
    return knex('church');
  }

  static getOneChurch(id) {
    return knex('church').where({ id });
  }

  static async addWardBranch(church) {
    const addedChurch = await knex('church')
      .insert(church)
      .returning('*');
    return addedChurch;
  }

  static async removeWardBranch(id) {
    const removedWardBranch = await knex('church')
      .del()
      .where({ id })
      .returning('id');
    return removedWardBranch;
  }
}

module.exports = Church;
