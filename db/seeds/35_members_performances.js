exports.seed = function (knex) {
  return knex('members_performances').del()
    .then(() => {
      return knex('members_performances').insert([{
        id: 1,
        member_id: 1,
        performance_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        member_id: 1,
        performance_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        member_id: 2,
        performance_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        member_id: 2,
        performance_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        member_id: 3,
        performance_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('members_performances_id_seq', (SELECT MAX(id) FROM members_performances));"
      );
    });
};