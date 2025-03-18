const express = require('express')
const app = express()
const port = 5833
const userRouter = require('./routes/userRouter')
const { MongoDBCon } = require('./Database/connection')
const { recordfile } = require('./middleware/index')


// Connection
MongoDBCon('mongodb://localhost:27017/userAllData')
.then(()=>{console.log("MongoDB connected");})
.catch((error)=>{console.log(error);})


// Middleware
app.use(express.urlencoded({ extended: false}))
app.use(recordfile('log.txt'))


// Routes
app.use('/api/users',userRouter)


app.listen(port, ()=>{
  console.log(`server runnung on http://localhost:${port}`);
})