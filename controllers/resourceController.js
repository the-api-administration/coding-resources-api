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



module.exports = {
    createResource,
    getResource
}