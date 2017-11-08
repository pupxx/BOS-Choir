const knex = require('../db/connection.js');

class Piece {
    constructor() {

    }

    static getAllPieces() {
        return knex('piece')
    }

}

module.exports = Piece