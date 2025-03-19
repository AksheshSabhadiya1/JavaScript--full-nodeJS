const express = require('express')
const userRouter = express.Router()
const { createUserSignUp, createUserLogin } = require('../controllers/user')

userRouter.post('/', createUserSignUp)
userRouter.post('/login', createUserLogin)

module.exports = userRouter