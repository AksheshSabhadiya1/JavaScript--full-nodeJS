const User = require('../models/user')

const getAllUsers = async(req, res) =>{
  const allusers = await User.find({})
  return res.json(allusers)
}

const getUserById = async(req, res) => {
  const user = await User.findById(req.params.id)
  if(!user) { return res.status(404).json({ msg: "User not Found"})}
  return res.json(user)
}

const updateUserById = async(req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body)

  const user = await User.findById(req.params.id)
  return res.json(user)
}

const deleteUserById = async(req, res)=>{
  const user = await User.findByIdAndDelete(req.params.id)
  return res.json(user)
}

const createNewUser = async(req,res)=>{
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
}

const getNameAndEmail = async(req, res)=>{
  const allusers = await User.find({})
  const html = `
    <ul> 
    ${allusers.map((user)=> `<li>${user.first_name} - ${user.email}</li>`).join("")}
    </ul>
  `
  res.send(html)
}


module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById, createNewUser, getNameAndEmail }