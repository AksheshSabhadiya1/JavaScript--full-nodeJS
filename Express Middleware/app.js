
const express = require('express')
const app = express()
const port = 5833
const users = require('./MOCK_DATA.json')
const fs = require('fs')

app.use(express.urlencoded({ extended: false}))

app.use((req, res, next)=>{
  console.log("Hello from middleware 1");
  req.myname = "Akshhuuu"
  next()
})

app.use((req, res, next)=>{
  console.log("Hello from middleware 2", req.myname);
  fs.appendFile('log.txt', `\n${Date.now()}: ${req.method}: ${req.path}`, (error, data)=>{
    next()
  })
})


// HTML render on browser
app.get('/users',(req, res)=>{
  const html = `
    <ul> 
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>
  `
  res.send(html)
})


// REST API
app.get('/api/users',(req, res)=>{
  res.setHeader('X-myname',"Akshesh sabhadiya")   // custom header, best practice to write custom header with X-headerName
  return res.json(users)
})


app.route('/api/users/:id')
.get((req, res)=>{
  const id = Number(req.params.id)
  const user = users.find(user => user.id === id)
  return res.json(user)
})
.patch((req, res)=>{
  const id = Number(req.params.id)
  const user = users.find(user => user.id === id)
  const updatebody = req.body

  Object.assign(user, updatebody)
  return res.json(user)
})
.delete((req, res)=>{
  const id = Number(req.params.id)
  const user = users.filter(user=> user.id !== id)
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(user), (err, data)=>{
    return res.json(user)
  })
})

// POST
app.post('/api/users',(req, res)=>{
  const body = req.body;
  users.push({id: users.length + 1, ...body})
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
    return res.json(users)
  })

})


app.listen(port, ()=>{
  console.log(`server runnung on http://localhost:${port}`);
})