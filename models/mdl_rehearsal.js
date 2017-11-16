const knex = require('../db/connection.js');

class Rehearsal {
    constructor() {

    }

    static getAllRehearsals() {
        return knex('rehearsal').innerJoin('church', 'church_id', 'church.id')
    }

}

module.exports = Rehearsal