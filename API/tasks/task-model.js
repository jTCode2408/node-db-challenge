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
        .join('projects', 'tasks.project_id', 'projects.id')
    .select('tasks.description','projects.project', 'projects.description', 'tasks.project_id', 'tasks.id')
}