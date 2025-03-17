
const express = require('express')
const app = express()
const port = 4002
const studentRouter = require('./routes/studentRouter')
const newRouter = require('./routes/newRouter')
const bodyparser = require('body-parser')

app.use(bodyparser.json())

app.use(express.static('pages'))
app.use(express.static('images'))

app.use(newRouter)
app.use('/student', studentRouter)

app.listen(port, ()=>{
  console.log(`server Running on http://localhost:${port}`);
})