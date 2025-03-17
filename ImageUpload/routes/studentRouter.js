
const express = require('express')
const studentRouter = express.Router()
const Student = require('../models/database')
const multer = require('multer')


//## Using multer, image(file) store in images folder at diskstorage level
// const storage = multer.diskStorage({
//   destination: (req, file, callback)=>{
//     callback(null, 'C:/Users/admin/Desktop/MongoDB/ImageUpload/images')
//   },
//   filename: (req, file, callback) => {
//     const suffix = Date.now()
//     callback(null, suffix + '-' + file.originalname)
//   }
// })



//## Using multer, store image(file) Base64 path on mongoDB server
const storage = multer.memoryStorage()

const uploadimage = multer({storage})


studentRouter.post('/create', uploadimage.single('image'), async (req, res)=>{
  try{
    const {name, age, email, mobile, address} = req.body

    // const imagepath = req.file ? req.file.path : null
    const imagepathBase64 = req.file ? req.file.buffer.toString('base64') : null 

    const newStudent = new Student({
      name,
      age,
      email,
      mobile,
      address,
      image: imagepathBase64
    })

    await newStudent.save()
    res.status(201).json({message: "student create succesfully", student: newStudent})
  }
  catch(error) {
    console.log(error);
    res.status(500).json({message: "student not created"})
  }
})

module.exports = studentRouter