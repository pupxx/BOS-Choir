exports.seed = function (knex) {
  return knex('rehearsal').del()
    .then(() => {
      return knex('rehearsal').insert([{
        id: 1,
        rehearsedate: '2017-11-23',
        rehearsetime: '17:00:00',
        church_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        rehearsedate: '2017-12-15',
        rehearsetime: '17:00:00',
        church_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        rehearsedate: '2017-12-19',
        rehearsetime: '17:00:00',
        church_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('rehearsal_id_seq', (SELECT MAX(id) FROM rehearsal));"
      );
    });
};