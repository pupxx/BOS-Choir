const knex = require('../db/connection.js')

class Performance {
  constructor() {

  }

  static getAllPerformaces() {
    return knex('performance')
  }

}

module.exports = Performance
