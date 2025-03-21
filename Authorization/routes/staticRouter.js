const express = require('express')
const staticRouter = express.Router()
const URL = require('../models/url')
const { accessBy } = require('../middleware/authService')

staticRouter.get('/', accessBy(["NORMAL","ADMIN"]), async(req, res)=>{
  const allurl = await URL.find({ createdBy: req.user._id })
  res.render('Home', {urls: allurl})
})

staticRouter.get('/admin/urls', accessBy(["ADMIN"]), async(req, res)=>{
  const allurl = await URL.find({})
  res.render('Home', {urls: allurl})
})

staticRouter.get('/signup', async(req, res)=>{
  return res.render("signup") 
})

staticRouter.get('/login', async(req, res)=>{
  return res.render("login")
})

module.exports = staticRouter