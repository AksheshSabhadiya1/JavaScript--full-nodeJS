const express = require('express')
const staticRouter = express.Router()
const URL = require('../models/url')

staticRouter.get('/', async(req, res)=>{
  if(!req.user) return res.redirect('/login')

  const allurl = await URL.find({ createdBy: req.user.id })
  res.render('Home', {urls: allurl})
})

staticRouter.get('/signup', async(req, res)=>{
  return res.render("signup") 
})

staticRouter.get('/login', async(req, res)=>{
  return res.render("login")
})

module.exports = staticRouter