
const express = require('express')
const app = express()
const port = 5833
const mongoose = require('mongoose')

app.use(express.urlencoded({ extended: false}))

// Connection
mongoose.connect('mongodb://localhost:27017/userAllData')
.then(()=>{console.log("MongoDB connected");})
.catch((error)=>{console.log(error);})


// Schema
const userSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String},
  email: {type: String, required: true, unique: true},
  gender: {type: String},
  Job_title: {type: String}
},{timestamps: true})


// Model
const User = mongoose.model('user',userSchema)


// HTML render on browser
app.get('/users', async(req, res)=>{
  const allusers = await User.find({})
  const html = `
    <ul> 
    ${allusers.map((user)=> `<li>${user.first_name} - ${user.email}</li>`).join("")}
    </ul>
  `
  res.send(html)
})


// REST API
app.get('/api/users', async(req, res)=>{
  const allusers = await User.find({})
  return res.json(allusers)
})


app.route('/api/users/:id')
.get(async(req, res)=>{
  const user = await User.findById(req.params.id)
  if(!user) { return res.status(404).json({ msg: "User not Found"})}
  return res.json(user)
})
.patch(async(req, res)=>{
  await User.findByIdAndUpdate(req.params.id, req.body)

  const user = await User.findById(req.params.id)
  return res.json(user)
})
.delete(async(req, res)=>{
  const user = await User.findByIdAndDelete(req.params.id)
  return res.json(user)
})

// POST
app.post('/api/users', async(req, res)=>{
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.Job_title){
    return res.status(404).json({ msg: "All fields are required"})
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    Job_title: body.Job_title
  })

  return res.status(201).json(result)

})


app.listen(port, ()=>{
  console.log(`server runnung on http://localhost:${port}`);
})