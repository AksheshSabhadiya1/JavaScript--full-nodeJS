/* Module Type

// Core Module
const http = require('http')

// Local Module
const requestHandler = require('./userForm');

// External Module
const express = require('express')

*/



const requestHandler = require('./userForm');

const express = require('express')

const app = express()

// app.use("/",(req, res, next)=>{
//   console.log("first middleware", req.url, req.method);
//   next()
// })

// app.use("/submit-details",(req, res, next)=>{
//   console.log("second middleware", req.url, req.method);
//   res.send('<p>Welcome Akshuuuuu</p>')
// })

app.use("/",(req, res, next)=>{
  console.log("first middleware", req.url, req.method);
  next()
})

app.post("/submit-details",(req, res, next)=>{
  console.log("submit-details middleware", req.url, req.method);
  res.send('<p>Welcome Akshuuuuu at submit-details</p>')
})

app.use('/',(req, res, next)=>{
  console.log("another middleware", req.url, req.method);
  res.send('<p>Welcome Akshuuuuu another middleware</p>')
})



const port = 3002
app.listen(port, ()=>{
  console.log(`Server Running on http://localhost:${port}`);
})