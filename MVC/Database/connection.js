const mongoose = require('mongoose')

const MongoDBCon = (url) => {
  return mongoose.connect(url)
}

module.exports = { MongoDBCon }