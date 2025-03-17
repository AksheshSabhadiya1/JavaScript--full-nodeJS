
const express = require('express')
const app = express()
const port = 3300
const userRouter = require('./Routes/userRouter')
const contactusRouter = require('./Routes/contactusRouter')
const reviewRouter = require('./Routes/reviewRouter')
const path = require('path')
const rootDir = require('./Utils/PathUtils')


app.use((req, res, next)=>{
  console.log(req.url, req.method);
  next()
})

app.use(express.urlencoded())
app.use(userRouter)
app.use(contactusRouter)
app.use(reviewRouter)

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootDir, 'Views', '404.html'))
})

app.listen(port, ()=>{
  console.log(`Server Running on http://localhost:${port}`);
})