
const express = require('express')
const userRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtil')
const { registarProducts } = require('./hostRouter')


userRouter.use(express.static(path.join(rootDir,'public')))

userRouter.get('/',(req, res, next)=>{
  console.log(registarProducts);
  // res.sendFile(path.join(rootDir, 'views', 'ProductHome.html'))
    res.render('ProductHome',{registarProducts: registarProducts, pageTitle: 'Product Cart HomePage', currentPage: 'ProductHome'})
})


module.exports = userRouter