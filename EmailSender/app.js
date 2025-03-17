const express = require('express')
const app = express()
const port= 4373
const sendMail = require('./controller/sendMail')

app.get('/', (req, res)=>{
  res.send("Hello baka");
})

app.get('/mail', sendMail)

app.listen(port, ()=> {
  console.log(`server running on http://localhost:${port}`);
})