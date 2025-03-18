const express = require('express')
const userRouter = express.Router()
const { getAllUsers, getUserById, deleteUserById, updateUserById, createNewUser, getNameAndEmail } = require('../controllers/user')

// HTML render on browser
userRouter.get('/name-email', getNameAndEmail)


// REST API
userRouter.route('/')
.get(getAllUsers)
.post(createNewUser)

userRouter.route('/:id')
.get(getUserById)
.patch(updateUserById)
.delete(deleteUserById)


module.exports = userRouter;