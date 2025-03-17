const express = require('express')
const hostRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtil')


hostRouter.get("/add-home",(req, res, next)=>{
  res.sendFile(path.join(rootDir, 'views','AddHome.html'))
})

hostRouter.post("/add-home",(req, res, next)=>{
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views','HomeAdded.html'))
})

module.exports = hostRouter