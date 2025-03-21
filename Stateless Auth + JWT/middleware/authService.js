const { getUser } = require('../Auth/auth')

const authentication = async (req, res, next) => {
    // const uid = req.cookies?.uid
    // if(!uid) return res.redirect('/login')
    // const user = await getUser(uid)
    // if(!user) return res.redirect('/login')
      
    const uid = req.headers["authorization"]
    if(!uid) return res.redirect('/login')

    const token = uid.split('Bearer ')[1]
    if(!token) return res.redirect('/login')

    const user = getUser(token)
    if(!user) return res.redirect('/login')

    req.user = user
    next()
}


const checkAuth = async (req, res, next) => {
  // const uid = req.cookies?.uid
  // const user = await getUser(uid)
  
  const uid = req.headers["authorization"]
  const token = uid.split('Bearer ')[1]
  const user = getUser(token)
  
  req.user = user
  next()
}


module.exports = { authentication, checkAuth }