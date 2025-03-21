const mongoose = require('mongoose')
const { mongourl } = require('../config')

const MongoDBCon = async() => {
  return await mongoose.connect(mongourl)
}

module.exports = { MongoDBCon }