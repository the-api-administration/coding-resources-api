const express = require('express');
const router = express.Router();
const getResources = require('../controllers/homeController')



router.get('/', getResources)

module.exports = router