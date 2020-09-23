
exports.up = function(knex) {
    return knex.schema.createTable('certificates', function(table){
        table.string('pf_id').unsigned()
        table.string('cf_name').notNullable()
        table.string('cf_desc').notNullable()
        table.string('cf_institution').notNullable()
        table.string('cf_date').notNullable()
        table.string('cf_img').notNullable()
        table.string('cf_url').notNullable()
        
        table.foreign('pf_id').references('profiles.pf_id')
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExist('certificates')
};
