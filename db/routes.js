const dbo = require("./conn.js")

function fetchAll(req, res) {
  const dbConnect = dbo.getDb()
    dbConnect
      .collection('resources')
      .find({})
      .toArray((err, result) => {
        if (err) {
          res.status(400).json({message: "Error fetching list"})
        }else {
          res.json({message: "resources fetched successfully", data: result})
        }
      })
}


function addResource(req, res) {

  const newResource = req.body

  // perhaps some request body validation here

  const dbConnect = dbo.getDb()
  dbConnect
    .collection('resources')
    .insertOne(newResource, (err, result) => {
      if (err) {
        res.status(400).json({message: "Error fetching list"})
      }else {
        res.status(201).json({message: `Added a new resource with id ${result.insertedId}`})
      }
    })
    
}

function fetchByKeyword(req, res) {
  const keyword = req.params.keyword.toLowerCase()
  var match = {}
  if (keyword) {
    match = { keywords: keyword }
  }
  const dbConnect = dbo.getDb()

  dbConnect
    .collection('resources')
    .find(match)
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({message: "Error fetching list"})
      }else {
        res.status(200).json({message: "resources fetched successfully", data: result})
      }
    })
}

module.exports = { fetchAll, addResource, fetchByKeyword }