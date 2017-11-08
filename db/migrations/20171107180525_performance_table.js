exports.up = function (knex) {
    return knex.schema.createTable('performance', (table) => {
        table.increments();
        table.text('perfname').notNullable().defaultTo('');
        table.date('perfdate');
        table.time('perftime').defaultTo('00:00:00');
        table.text('menattire').notNullable().defaultTo('');
        table.text('womenattire').notNullable().defaultTo('');
        table.integer('church_id').references('church.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('performance');
};
