
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments()
        tbl.text('description')
            .notNullable()
        tbl.text('notes', 255)
        tbl.boolean('completed_task')
            .defaultTo(false)
        //FK for project ID
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
};
