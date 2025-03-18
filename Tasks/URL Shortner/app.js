const express = require("express");
const app = express();
const PORT = 5833;
const { MongoDBCon } = require("./database/connection");
const urlRouter = require("./routes/urlRouter");
const URL = require("./models/url");

//connection
MongoDBCon("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use(express.json());

//router
app.use("/url", urlRouter);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
