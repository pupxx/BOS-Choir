const knex = require('../db/connection.js');
const moment = require('moment');
const twelve = require('twentyfour-to-twelve');

class Performance {
  // static async getAllPerformances() {
  //   const performances = await knex('performance')
  //     .innerJoin('church', 'church.id', 'church_id')
  //     .select('*', 'church.id as churchID', 'performance.id as performanceID');
  //   return performances;
  // }

  static async getAllPerformances() {
    const performances = await knex('performance')
      .select('*', 'performance.id as performanceID', 'church.id as churchID')
      .innerJoin('church', 'performance.church_id', 'church.id');

    const promises = performances.map(el => {
      return knex('performances_pieces')
        .where('performances_pieces.performance_id', el.performanceID)
        .innerJoin('piece', 'piece.id', 'performances_pieces.piece_id')
        .select('*', 'piece.id as pieceID', 'performances_pieces.id as perfPiecesID')
        .then(pieces => {
          el.pieces = pieces;
          el.perfyear = moment(el.perfdate).format('YYYY');
          el.formattedDate = moment(el.perfdate).format('LL');

          return el;
        });
    });

    return Promise.all(promises);
  }

  static async getMembersPerformances(id) {
    const performances = await this.getAllPerformances();
    const membersPerformances = await knex('members_performances')
      .select('*', 'performance_id as performanceID')
      .where('member_id', id);
    const memberNameAndID = await knex('member')
      .select('firstname', 'member.id as memberID')
      .where('member.id', id);

    for (let j = 0; j < performances.length; j += 1) {
      for (let i = 0; i < membersPerformances.length; i += 1) {
        if (performances[j].id === membersPerformances[i].performanceID) {
          performances[j].attending = true;
        }
      }
      performances[j].firstname = memberNameAndID[0].firstname;
      performances[j].memberID = memberNameAndID[0].memberID;
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
    const attending = {
      member_id: userid,
      performance_id: performanceid
    };
    const attendance = await knex('members_performances')
      .insert(attending)
      .returning('*');
    return attendance;
  }

  static async performanceAttendanceFalse(userid, performanceid) {
    const attendance = await knex('members_performances')
      .del()
      .where('member_id', userid)
      .andWhere('performance_id', performanceid)
      .returning('*');
    return attendance;
  }

  static async getSinglePerformance(id) {
    const singlePerformance = await knex('performance')
      .innerJoin('church', 'performance.church_id', 'church.id')
      .where('performance.id', id)
      .select('*', 'performance.id as performanceID', 'church.id as churchID');
    // const singlePerformanceId = singlePerformance[0].performanceID;
    singlePerformance[0].formattedDate = moment(singlePerformance[0].perfdate).format('LL');
    singlePerformance[0].formattedTime = twelve(singlePerformance[0].perftime);

    const pieces = await knex('performances_pieces')
      .select('*', 'piece.id as pieceID')
      .innerJoin('piece', 'piece.id', 'performances_pieces.piece_id')
      .where('performances_pieces.performance_id', id);
    singlePerformance[0].pieces = pieces;

    return singlePerformance;
  }

  static async editPerformance(id, data) {
    const editedPerformance = await knex('performance')
      .update(data)
      .returning('*')
      .where({ id });
    return editedPerformance;
  }

  static async getPerformanceAttendance(id) {
    const performanceAttendance = await knex('members_performances')
      .select('*', 'member.id as memberID')
      .innerJoin('member', 'member.id', 'members_performances.member_id')
      .innerJoin('church', 'member.church_id', 'church.id')
      .where('members_performances.performance_id', id);

    return performanceAttendance;
  }
}

module.exports = Performance;
