const knex = require('../db/connection.js');

class Performance {
  static getAllPerformances(id) {
    if (id) {
      return knex('performance')
        .innerJoin('church', 'church.id', 'church_id')
        .select('*', 'church.id as churchID', 'performance.id as performanceID');
    }
    return knex('performance');
  }

  static async getMembersPerformances(id) {
    const performances = await this.getAllPerformances(id);
    const membersPerformances = await knex('members_performances')
      .select('*', 'performance_id as performanceID')
      .where('member_id', id);

    // .innerJoin('piece', 'piece.id', 'performances_pieces.piece_id');

    for (let j = 0; j < performances.length; j += 1) {
      for (let i = 0; i < membersPerformances.length; i += 1) {
        if (performances[j].id === membersPerformances[i].performanceID) {
          performances[j].attending = true;
        }
      }
    }

    const promises = performances.map(el => {
      return knex('performances_pieces')
        .where('performances_pieces.performance_id', el.performanceID)
        .innerJoin('piece', 'piece.id', 'performances_pieces.piece_id')
        .select('*', 'piece.id as pieceID', 'performances_pieces.id as perfPiecesID')
        .then(pieces => {
          el.pieces = pieces;
          return el;
        });
    });
    return Promise.all(promises);
  }

  static async performanceAttendanceTrue(userid, performanceid) {
    console.log(userid, 'this is the user id');
    const attending = {
      member_id: userid,
      performance_id: performanceid
    };
    const attendance = await knex('members_performances')
      .insert(attending)
      .returning('*');
    return attendance;
  }
}

module.exports = Performance;
