const knex = require('../../db/connection.js');

class Signup {
    constructor() {        
    }

    static checkForUser(email){
       return knex('member').where({email})
    }
    
}

module.exports = Signup
