
const express = require('express')
const app = express()
const port = 3002
const userRouter = require('./routes/userRouter')
const {hostRouter} = require('./routes/hostRouter')
const path = require('path')
const rootDir = require('./Utils/PathUtil')


// EJS setup
app.set('view engine','ejs')
app.set('views','views')

app.use((req, res, next)=>{
  console.log(req.url, req.method);
  next()
})

app.use(express.urlencoded())
app.use(userRouter)
app.use('/host',hostRouter)

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next)=>{
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
    res.status(404).render('404',{pageTitle: '404 Page Not Found'})
})

app.listen(port, ()=>{
  console.log(`Server running on http://localhost:${port}`);
})