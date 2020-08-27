exports.up = function(knex) {
    return knex.schema.createTable('profiles', function(table) {
        table.string('pf_id').notNullable().primary()
        table.string('pf_name').notNullable()
        table.string('pf_age').notNullable()
        table.string('pf_address').notNullable()
        table.string('pf_desc').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profiles')
};
