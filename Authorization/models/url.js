const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
  shortId: {type: String, required: true, unique: true},
  redirectURL: {type: String, required: true},
  visitHistory: [ {timestamp: {type: Number}, date: {type: String} } ],
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
},{timestamp: true})


const URL = mongoose.model('urls', urlSchema)

module.exports = URL