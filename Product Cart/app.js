
const express = require('express')
const app = express()
const port = 3002
const userRouter = require('./Routes/userRouter')
const hostRouter = require('./Routes/hostRouter')
const path = require('path')
const rootDir = require('./Utils/PathUtil')


app.use((req, res, next)=>{
  console.log(req.url, req.method);
  next()
})

app.use(express.urlencoded())
app.use(userRouter)
app.use('/host',hostRouter)

app.use(express.static(path.join(rootDir, 'Public')))

app.use((req, res, next)=>{
  // res.status(404).send('<h1>404 Page Not Found</h1>')
  // res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'))
    res.status(404).sendFile(path.join(rootDir, 'Views', '404.html'))
})

app.listen(port, ()=>{
  console.log(`Server running on http://localhost:${port}`);
})