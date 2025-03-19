const { getUser } = require('../Auth/auth')

const authentication = async (req, res, next) => {
  const uid = req.cookies?.uid
  if(!uid) return res.redirect('/login')

  const user = await getUser(uid)
  if(!user) return res.redirect('/login')
  
  req.user = user
  next()
}


const checkAuth = async (req, res, next) => {
  const uid = req.cookies?.uid
  const user = await getUser(uid)
  
  req.user = user
  next()
}


module.exports = { authentication, checkAuth }