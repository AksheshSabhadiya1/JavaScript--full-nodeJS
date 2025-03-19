const { getUser } = require('../Auth/auth')

const checkforAuth = (req, res, next)=>{
  const tokenvalue = req.cookies?.token
  res.user = null

  if(!tokenvalue) return next()

  const user = getUser(tokenvalue)
  req.user = user
  next()
}

const accessBy = (roles = [])=> {
  return (req, res, next)=> {
    if(!req.user) return res.redirect('/login')
    
    if(!roles.includes(req.user.role)) return res.end('UnAuthorized')
    
    return next()
  }
}


// const authentication = async (req, res, next) => {      
//     const uid = req.headers["authorization"]
//     if(!uid) return res.redirect('/login')

//     const token = uid.split('Bearer ')[1]
//     if(!token) return res.redirect('/login')

//     const user = getUser(token)
//     if(!user) return res.redirect('/login')

//     req.user = user
//     next()
// }


// const checkAuth = async (req, res, next) => {
//   const uid = req.headers["authorization"]
//   const token = uid.split('Bearer ')[1]
//   const user = getUser(token)
  
//   req.user = user
//   next()
// }


module.exports = { checkforAuth, accessBy }