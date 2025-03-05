const exporess = require('express')
const userRouter = exporess.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtils')

userRouter.get('/',(req, res, next)=>{
  res.sendFile(path.join(rootDir, 'Views', 'Home.html'))
})

module.exports = userRouter