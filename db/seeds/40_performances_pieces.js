exports.seed = function (knex) {
  return knex('performances_pieces').del()
    .then(() => {
      return knex('performances_pieces').insert([{
        id: 1,
        performance_id: 1,
        piece_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        performance_id: 1,
        piece_id: 2,
        created_at: new Date(),
        updated_at: new Date()
        }, {
          id: 3,
          performance_id: 2,
          piece_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('performances_pieces_id_seq', (SELECT MAX(id) FROM performances_pieces));"
      );
    });
};