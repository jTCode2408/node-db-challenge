const express = require('express')
const server = express();
const ResourceRouter = require ('./API/resources/resourceRouter')
const ProjectRouter = require('./API/projects/projectRouter');
server.use(express.json());

server.use('/api/resources', ResourceRouter)
server.use('/api/projects', ProjectRouter)
server.get('/', (req, res) => {
    res.send('server start test')
})

module.exports = server;