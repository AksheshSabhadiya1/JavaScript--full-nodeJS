const express = require('express')
const staticRouter = express.Router()
const URL = require('../models/url')

staticRouter.get('/',async(req, res)=>{
  const allURL = await URL.find({})
  res.render('Home', {urls: allURL})
})

module.exports = staticRouter