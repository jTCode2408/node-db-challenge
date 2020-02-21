//add pj
//get pj's
const express = require('express')
const router = express.Router();
const Projects = require('./project-model.js')

router.get('/', (req, res) => {
    Projects.find()
        .then(getting => {
            console.log(getting);
            res.status(200).json(getting)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'Failed to retrieve projects'})
        })
})
router.post('/', (req, res) => {
    Projects.add(req.body)
        .then(addProject => {
            res.status(201).json(req.body)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:'unable to add project'})
    })
})

module.exports = router