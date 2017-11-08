exports.seed = function (knex) {
  return knex('performance').del()
    .then(() => {
      return knex('performance').insert([{
        id: 1,
        perfname: 'Christmas',
        perfdate: '2017-12-03',
        perftime: '18:00:00',
        menattire: 'White shirts and dark pants',
        womenattire: 'Blue blouse and dark skirt',
        church_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        perfname: 'Stake Conference',
        perfdate: '2018-06-10',
        perftime: '16:00:00',
        menattire: 'Red shirts and dark pants',
        womenattire: 'Pink blouse and dark skirt',
        church_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('performance_id_seq', (SELECT MAX(id) FROM performance));"
      );
    });
};