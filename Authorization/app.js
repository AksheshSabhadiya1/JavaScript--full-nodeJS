const express = require("express");
const app = express();
const PORT = 5833;
const { MongoDBCon } = require("./database/connection");
const urlRouter = require("./routes/urlRouter");
const staticRouter = require('./routes/staticRouter')
const userRouter = require('./routes/userRouter')
const URL = require("./models/url");
const path = require('path')
const cookieParser = require('cookie-parser')
const { checkforAuth, accessBy } = require('./middleware/authService')


//connection
MongoDBCon("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(checkforAuth)

app.set('view engine','ejs')
app.set('views', path.resolve('./views'))


//router
app.use('/user', userRouter)
app.use('/url', accessBy(["NORMAL", "ADMIN"]), urlRouter);
app.use('/', staticRouter)



app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
