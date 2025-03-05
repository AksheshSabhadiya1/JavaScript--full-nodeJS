const express = require('express')
const userRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtil')

userRouter.get("/",(req, res, next)=>{
  res.sendFile(path.join(rootDir, 'views','Home.html'))
})


module.exports = userRouter