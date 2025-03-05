
const express = require('express')
const userRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtil')


userRouter.get('/',(req, res, next)=>{
  // res.send("<h1>Welcome Amazon</h1> <br> <a href='/host/add-product' >Add Product</a>")
  // res.sendFile( path.join(__dirname, '../', 'Views', 'ProductHome.html') )
  res.sendFile(path.join(rootDir, 'Views', 'ProductHome.html'))
})


module.exports = userRouter