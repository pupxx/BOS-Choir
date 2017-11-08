exports.up = function (knex) {
    return knex.schema.createTable('member', (table) => {
        table.increments();
        table.string('firstname').defaultTo('');
        table.string('lastname').notNullable().defaultTo('');
        table.text('address1').notNullable().defaultTo('');
        table.text('address2').notNullable().defaultTo('');
        table.string('city').notNullable().defaultTo('');
        table.string('prov').notNullable().defaultTo('ON');
        table.string('postal').notNullable().defaultTo('');
        table.string('phone').notNullable().defaultTo('');
        table.string('email').notNullable().defaultTo('');
        table.string('part').notNullable().defaultTo('');
        table.boolean('admin').notNullable().defaultTo(false);
        table.string('position').notNullable().defaultTo('member');
        table.integer('church_id').references('church.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('member');
};
