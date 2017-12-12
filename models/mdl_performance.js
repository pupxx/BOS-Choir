const knex = require('../db/connection.js');

class Performance {
  static getAllPerformances() {
    return knex('performance');
  }

  static getOnePerformance(id) {
    return knex('performance').where({ id });
  }

  static async getMembersPerformances(id) {
    const performances = await this.getAllPerformances();
    const membersPerformances = await knex('members_performances')
      .select('*', 'performance_id as performanceID')
      .where('member_id', id);

    for (let j = 0; j < performances.length; j += 1) {
      for (let i = 0; i < membersPerformances.length; i += 1) {
        if (performances[j].id === membersPerformances[i].performanceID) {
          performances[j].attending = true;
        }
      }
    }
    return performances;
  }
}

module.exports = Performance;
