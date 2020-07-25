//project/resources join table
exports.up = function(knex) {
    return knex.schema.createTable('project_resources', tbl => {
        tbl.primary(['project_id', 'resource_id'])

        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
        
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
};
