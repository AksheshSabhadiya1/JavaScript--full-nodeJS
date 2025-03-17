
const express = require('express')
const app = express()
const port = 5833

app.get('/',(req, res)=>{
  res.send('Hello from home-page')
})

app.get('/about',(req, res)=>{
  res.send('Hello from about-page & your name is '+ req.query.name + ' and your age is '+req.query.age)
})

app.listen(port, ()=>{
  console.log(`server runnung on http://localhost:${port}`);
})