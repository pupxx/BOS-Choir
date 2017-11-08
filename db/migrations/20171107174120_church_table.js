exports.up = function (knex) {
    return knex.schema.createTable('church', (table) => {
        table.increments();
        table.text('churchname').notNullable().defaultTo('');
        table.text('churchaddress1').notNullable().defaultTo('');
        table.text('churchaddress2').notNullable().defaultTo('');
        table.string('churchcity').notNullable().defaultTo('');
        table.string('churchprov').notNullable().defaultTo('ON');
        table.string('churchzip').notNullable().defaultTo('');
        table.string('churchphone').notNullable().defaultTo('');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('church');
};
