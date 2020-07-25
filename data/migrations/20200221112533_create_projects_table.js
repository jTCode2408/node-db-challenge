//create projects table
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments()
        tbl.string('project', 155)
            .notNullable()
            .unique()
        tbl.text('description')
        tbl.boolean('complete')
        .defaultTo(false)
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
};
