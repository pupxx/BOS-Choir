exports.seed = function (knex) {
  return knex('piece').del()
    .then(() => {
      return knex('piece').insert([{
        id: 1,
        piecetitle: 'Til We Meet Again',
        composer: 'Some guy',
        arrangement: 'Hymplicity',
        duration: '4:30:00',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        piecetitle: 'Come Follow Me',
        composer: 'Another guy',
        arrangement: 'Hymplicity',
        duration: '3:15:00',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        piecetitle: 'The Lord Is My Shephard',
        composer: 'Ben guy',
        arrangement: 'Hymplicity',
        duration: '6:30:00',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('piece_id_seq', (SELECT MAX(id) FROM piece));"
      );
    });
};