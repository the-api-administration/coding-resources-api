const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    keywords: {
        type: [String], //["JavaScript", "Git"]
        required: true,
    },
})

module.exports = mongoose.model('Resource', resourceSchema)