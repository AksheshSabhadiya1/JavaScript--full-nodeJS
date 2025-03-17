const express = require('express')
const contactusRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtils')


contactusRouter.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'Views', 'AddContact.html'))
})

contactusRouter.post('/contact-us',(req, res, next)=>{
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'Views', 'ContactAdded.html'))
})

module.exports = contactusRouter