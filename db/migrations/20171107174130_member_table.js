exports.up = function (knex) {
    return knex.schema.createTable('member', (table) => {
        table.increments();
        table.string('firstname').defaultTo('');
        table.string('lastname').notNullable().defaultTo('');
        table.text('address1').notNullable().defaultTo('');
        table.text('address2').notNullable().defaultTo('');
        table.str('city').notNullable().defaultTo('');
        table.str('prov').notNullable().defaultTo('ON');
        table.str('postal').notNullable().defaultTo('');
        table.str('phone').notNullable().defaultTo('');
        table.str('email').notNullable().defaultTo('');
        table.str('part').notNullable().defaultTo('');
        table.boolean('admin').notNullable().defaultTo(false);
        table.str('position').notNullable().defaultTo('member');
        table.str('part').notNullable().defaultTo('');
        table.integer('church_id').references('church.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('member');
};
