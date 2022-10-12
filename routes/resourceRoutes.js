const express = require('express');
const router = express.Router();
const {
	createResource,
	getResources,
	getMatches,
} = require('../controllers/resourceController')

//Adds new resource to database. 
router.post('/addResource', createResource);
router.get('/:keyword', getMatches)
router.get('/', getResources)

module.exports = router

