//add task
//get tasks(with project name & description included)

const db = require('../../data/db-config')

module.exports = {
    add,
    find
}

function add(task) {
    return db('tasks').insert(task)
}


function find() {
    return db('tasks')
        .join('projects', 'project_id', 'projects.id')
    .select('task_description', 'notes', 'tasks.id', 'projects.id', 'project', 'description')
}