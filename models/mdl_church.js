const knex = require('../db/connection.js');

class Church {
    constructor(){

    }

    static getAllChurches(){
        return knex('church')
    }

}

module.exports = Church