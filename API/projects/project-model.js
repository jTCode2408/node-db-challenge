//need add & get projects

const db = require('../../data/db-config')

module.exports = {
    add,
    find
}

function find() {
    return db('projects')
}

function add(project)
{
return db('projects').insert(project)
}