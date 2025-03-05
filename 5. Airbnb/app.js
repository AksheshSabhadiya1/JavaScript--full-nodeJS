//Core module
const express = require('express')
const path = require('path')

//Local module
const userRouter = require('./Routes/userRouter')
const hostRouter = require('./Routes/hostRouter')
const rootDir = require('./Utils/PathUtil')

const app = express()
const port = 3000


app.use((req, res, next)=>{
  console.log(req.url, req.method);
  next()
})

app.use(express.urlencoded())

app.use(userRouter)
app.use("/host",hostRouter)

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootDir, 'views','404.html'))
})


app.listen(port, ()=>{
  console.log(`Server Running on http://localhost:${port}`);
})