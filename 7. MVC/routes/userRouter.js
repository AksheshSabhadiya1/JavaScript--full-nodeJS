
const express = require('express')
const userRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtil')
const homeController = require('../controllers/Products')


userRouter.use(express.static(path.join(rootDir,'public')))

userRouter.get('/', homeController.getAllProducts)


module.exports = userRouter