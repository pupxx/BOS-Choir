const knex = require('../db/connection.js');

class Piece {
  static getAllPieces() {
    return knex('piece');
  }
}

module.exports = Piece;
