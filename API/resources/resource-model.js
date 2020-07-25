//add, find resources

const db = require('../../data/db-config');

module.exports = {
    add,
    find

}

function find() {
    return db('resources')
}

function add(resource) {
    return db('resources').insert(resource)
}