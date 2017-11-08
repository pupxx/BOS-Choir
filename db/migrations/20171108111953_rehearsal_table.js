exports.up = function (knex) {
    return knex.schema.createTable('rehearsal', (table) => {
        table.increments();
        table.date('rehearsedate');
        table.string('rehearsetime').defaultTo('');
        table.integer('church_id').references('church.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('rehearsal');
};
