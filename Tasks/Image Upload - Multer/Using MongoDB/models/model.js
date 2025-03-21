const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/imageUrl')
.then(()=> console.log("MongoDB Connected"))
.catch((error)=> console.log(error))

const imageSchema = mongoose.Schema({
  imageurl: {type: String, required: true}
},{timestamp: true})

const imageModel = mongoose.model('images', imageSchema)

module.exports = { imageModel }