
const express = require('express')
const app = express()
const port = 5833
const users = require('./MOCK_DATA.json')
const fs = require('fs')


// HTML render on browser
app.get('/users',(req, res)=>{
  const html = `
    <ul> 
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>
  `
  res.send(html)
})

app.use(express.urlencoded({ extended: false}))

// REST API
app.get('/api/users',(req, res)=>{
  return res.json(users)
})


// GET
// app.get('/api/users/:id',(req, res)=>{const id = Number(req.params.id) const user = users.find(user => user.id === id) return res.json(user)})

// PATCH
// app.patch('/api/users/:id',(req, res)=>{ return res.json({ "status": "pending"}) })

// DELETE
// app.delete('/api/users/:id',(req, res)=>{ return res.json({ "status": "pending"}) })


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
    return res.json({ "status": "pending"})
  })

})


app.listen(port, ()=>{
  console.log(`server runnung on http://localhost:${port}`);
})