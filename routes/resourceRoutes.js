const express = require('express');
const router = express.Router();
const {
    createResource,
    getResources,
} = require('../controllers/resourceController')

//Adds new resource to database. 
router.post('/addResource', createResource);
router.get('/:keyword', getResources)

module.exports = router