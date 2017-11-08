exports.up = function (knex) {
    return knex.schema.createTable('announcement', (table) => {
        table.increments();
        table.text('announcement').defaultTo('');
        table.date('enddate');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('announcement');
};
