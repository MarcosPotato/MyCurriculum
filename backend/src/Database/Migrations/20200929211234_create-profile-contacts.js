
exports.up = function(knex) {
    return knex.schema.createTable('contacts', function(table) {
        table.string('pf_id').unsigned()
        table.string('ct_git').notNullable()
        table.string('ct_linkedin').notNullable()
        table.string('ct_email').notNullable()
        
        table.foreign('pf_id').references('profiles.pf_id')
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExist('contacts')
};
