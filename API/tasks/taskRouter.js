//add task
//get tasks(with project name & description included)

const express = require('express')
const router = express.Router()

const Tasks = require('./task-model')
router.get('/', (req, res) => {
    
    Tasks.find()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Failed to retrieve tasks'})
        })
})

router.post('/', (req, res) => {
    Tasks.add(req.body)
        .then(adding => {
            res.status(201).json(req.body)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:"unable to add task"})
    })
})

module.exports=router