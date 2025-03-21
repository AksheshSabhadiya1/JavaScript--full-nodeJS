const express = require('express')
const app = express()
const port = 9898
const path = require('path')
const multer = require('multer')

// const upload = multer({ dest: "uploads/" })      // it's used, when diskStorage is not used

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })           // it's used when diskStorage used

app.set('view engine','ejs')
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))      // used to parse form-data

app.get('/', (req, res)=>{
  return res.render("homepage")
})

app.post('/upload', upload.single('profileImage') ,(req, res)=>{
    console.log("Image Upload Successfully");
    return res.redirect('/')
})

app.listen(port, ()=>{
  console.log(`Server Running on http://localhost:${port}`);
})
