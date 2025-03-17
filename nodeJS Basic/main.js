
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port=4005


//connection
mongoose.connect("mongodb://localhost:27017/Youtube_MongoDB")
.then(()=> console.log("MongoDB connected"))
.catch((error)=> console.log("MongoDB connection Error",error))

// Schema
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  job_title: { type: String }
}, {timestamps: true})

//model
const User = mongoose.model("user", userSchema)

app.get('/',(req,res)=>{
  res.json("Hello baka")
})

app.post('/api/users', async (req, res)=>{
  const body = req.body
  if( !body || !body.firstname || !body.lastname || !body.email || !body.gender || !body.job_title){
    res.status(404).json({ msg: "All fields are required" })
  }

  const result = await User.create({
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  })

  console.log("result:",result);
  return res.status(201).json({ msg: result})

})

app.listen(port, ()=>{
  console.log(`Server Running on https://localhost/${port}`);
})