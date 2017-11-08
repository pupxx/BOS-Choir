exports.up = function (knex) {
    return knex.schema.createTable('rehearsal', (table) => {
        table.increments();
        table.date('rehearsedate').notNullable().defaultTo('');
        table.time('rehearsetime').notNullable().defaultTo('');
        table.text('rehearselocation').notNullable().defaultTo('');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('rehearsal');
};
