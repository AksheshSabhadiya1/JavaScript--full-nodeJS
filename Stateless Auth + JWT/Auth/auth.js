const jwt = require('jsonwebtoken')
const secret = "Akshu@$11@$"


const setUser = (user)=> {
  return jwt.sign({
    id: user._id,
    email: user.email,
  }, secret)
}

const getUser = (token)=> {
  if(!token) return null

  try {
    return jwt.verify(token, secret)    
  } catch (error) {
    return null
  }
}

module.exports = { setUser, getUser }