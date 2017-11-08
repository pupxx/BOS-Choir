exports.up = function (knex) {
    return knex.schema.createTable('performances_pieces', (table) => {
        table.increments();
        table.integer('performance_id').references('performance.id').onDelete('CASCADE');
        table.integer('piece_id').references('piece.id').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('performances_pieces');
};
