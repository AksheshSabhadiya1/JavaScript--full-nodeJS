
const express = require('express')
const newRouter = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'C:/Users/admin/Desktop/MongoDB/ImageUpload/images'})

// const storage = multer.memoryStorage()
// const uploadimage = multer({storage})

newRouter.post('/insertImage', upload.single('image') , async (req, res)=>{
  try{
     console.log(req.body);
     console.log(req.file);
     
     res.send(`<img src='/${req.file.filename}' alt='image' />`)
  }catch(error){
    console.log(error);
  }
})

module.exports = newRouter 