//add resource
//get resources
const express = require('express')
const router = express.Router()
const Resources = require('./resource-model')

router.get('/', (req, res) => {
    Resources.find()
        .then(getting => {
            res.status(200).json(getting)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'unable to get resources'})
        })
})

router.post('/', (req, res) => {
    Resources.add(req.body)
        .then(adding => {
            console.log('ADD RESOURCE',adding)
            res.status(201).json(req.body)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'unable to add resource'})
        })
})

module.exports = router