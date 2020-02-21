const express = require('express')
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('server start test')
})

module.exports = server;