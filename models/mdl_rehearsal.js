const knex = require('../db/connection.js');

class Rehearsal {
    constructor() {

    }

    static getAllRehearsals() {
        return knex('rehearsal')
    }

}

module.exports = Rehearsal