const asyncHandler = require('express-async-handler');
const Resource = require('../models/resourceSchema') //Schema



//@desc Get all resources
//@route GET /api/resources/:keyword
//@access Public
const getResources = asyncHandler(async (req, res) => {
	// const keyword = req.params.keyword.toLowerCase();

	// // $regex: keyword - allows partial string matches for keyword i.e. java finds entries with keyword javascript
	// // $options: i - uses case-insensitive matching 
	// const resources = await Resource.find({
	// 	keywords: {
	// 		"$regex": keyword,
	// 		"$options": "i"
	// 	}
	// })

	// //Throw error if resource doesn't exist.
	// if (!resources) {
	// 	res.status(404).json({
	// 		error: `No resources were found with the ${keyword} keyword.`
	// 	})
	// } else {
	// 	res.status(200).json(resources)
	// }

})



module.exports = getResources
