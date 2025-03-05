
const express = require('express')
const reviewRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtils')

reviewRouter.get('/review',(req, res, next)=>{
  res.sendFile(path.join(rootDir, 'Views', 'AddReview.html'))
})

reviewRouter.post('/review',(req, res, next)=>{
  console.log(req.body);
    res.sendFile(path.join(rootDir, 'Views', 'ReviewAdded.html'))
})

module.exports = reviewRouter