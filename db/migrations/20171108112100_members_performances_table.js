exports.up = knex => {
  return knex.schema.createTable('members_performances', table => {
    table.increments();
    table
      .integer('member_id')
      .references('member.id')
      .onDelete('CASCADE');
    table
      .integer('performance_id')
      .references('performance.id')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('members_performances');
};
