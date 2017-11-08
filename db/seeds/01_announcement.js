exports.seed = function (knex) {
  return knex('announcement').del()
    .then(() => {
      return knex('announcement').insert([{
        id: 1,
        announcement: 'It\'s hard to seed files!!',
        enddate: '2017-11-15',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('announcement_id_seq', (SELECT MAX(id) FROM announcement));"
      );
    });
};