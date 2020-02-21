const express = require('express')
const server = express();

const ProjectRouter = require('./API/projects/projectRouter');
server.use(express.json());

server.use('/api/projects', ProjectRouter)
server.get('/', (req, res) => {
    res.send('server start test')
})

module.exports = server;