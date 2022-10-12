const asyncHandler = require('express-async-handler');
const Resource = require('../models/resourceSchema') //Schema



//@desc Get all resources
//@route GET /api/resources/:keyword
//@access Public

const getResource = asyncHandler(async (req, res) => {
    const keyword = req.params.keyword.toLowerCase();
    const searchQuery = await Resource.find({
        keywords: keyword
    })

    //Throw error if resource doesn't exist.
    if (!searchQuery) {
        res.status(400).json({
            error: `No resources were found with the ${keyword} keyword.`
        })
    } else {
        res.status(200).json(searchQuery)
    }

})


//@desc Create new resource
//@route POST /api/resources/addResource
//@access Public
const createResource = asyncHandler(async (req, res) => {
    const { name, url, description, keywords } = req.body

    //Verifies all fields have been completed.
    if (!name || !url || !description || !keywords) {
        res.status(400)
        throw new Error('Please fill out all fields to submit a new resource.')
    }


    try {
       const newResource = await Resource.create({
        name,
        url,
        description,
        keywords
       }) 
        
     res.status(200).json(newResource);
    } catch (error) {
       console.log(error) 
    }
    

   
})

module.exports = {
    createResource,
    getResource
}