exports.up = function (knex) {
    return knex.schema.createTable('piece', (table) => {
        table.increments();
        table.text('piecetitle').notNullable().defaultTo('');
        table.string('composer').notNullable().defaultTo('');
        table.string('arrangement').notNullable().defaultTo('');
        table.string('duration').notNullable().defaultTo('');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('piece');
};
