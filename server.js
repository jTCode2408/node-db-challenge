const express = require('express')
const server = express();
const ResourceRouter = require('./API/resources/resourceRouter');
const ProjectRouter = require('./API/projects/projectRouter');
const TaskRouter = require('./API/tasks/taskRouter');

server.use(express.json());

server.use('/api/resources', ResourceRouter)
server.use('/api/projects', ProjectRouter)
server.use('/api/tasks', TaskRouter)
server.get('/', (req, res) => {
    res.send('server start test')
})

module.exports = server;