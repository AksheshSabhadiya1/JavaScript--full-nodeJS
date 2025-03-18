const fs = require('fs')

const recordfile = (filename) => {
  return (req, res, next) => {
    fs.appendFile(filename, `\n${Date.now()}: ${req.method}: ${req.path}`, (error, data)=>{
    next()
  })
  }
}

module.exports = { recordfile }