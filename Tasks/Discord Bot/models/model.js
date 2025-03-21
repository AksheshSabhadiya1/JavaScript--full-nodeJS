const mongoose = require('mongoose')

const urlschema = mongoose.Schema({
  shorturl: {type: String, required: true, unique: true},
  redirecturl: {type: String, required: true},
},{timestamp: true})

const URL = mongoose.model('botURL', urlschema)

module.exports = URL