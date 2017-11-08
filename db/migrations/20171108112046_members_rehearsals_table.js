exports.up = function (knex) {
    return knex.schema.createTable('members_rehearsals', (table) => {
        table.increments();
        table.integer('member_id').references('member.id').onDelete('CASCADE');
        table.integer('rehearsal_id').references('rehearsal.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('members_rehearsals');
};
