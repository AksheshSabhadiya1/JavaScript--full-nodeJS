const mongoose = require('mongoose')

const MongoDBCon = async(url) => {
  return await mongoose.connect(url)
}

module.exports = { MongoDBCon }