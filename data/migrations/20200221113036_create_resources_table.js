//table for resouces
exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments()
        tbl.string('resource', 155)
            .notNullable()
            .unique()
        tbl.text('resource_description')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resources')
};
