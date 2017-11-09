const knex = require('../db/connection.js')

class Performance {
  constructor() {

  }

  static getAllPerformances() {
    return knex('performance')
  }

  static getOnePerformance(id){
    return knex('performance').where({id});
  }

}

module.exports = Performance
