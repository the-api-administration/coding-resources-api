const express = require('express');
const router = express.Router();
const {
    createResource,
    getResource,
} = require('../controllers/resourceController')

//Adds new resource to database. 
router.post('/addResource', createResource);
router.get('/:keyword', getResource)

module.exports = router