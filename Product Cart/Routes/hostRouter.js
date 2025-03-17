const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../Utils/PathUtil");     // file-Helper

hostRouter.get("/add-product", (req, res, next) => {
  // res.send(` <h1> Add Your Products on Amazon </h1> <br>
  //            <form action='/host/add-product' method='POST'>
  //               Product Name: <input type='text' name='productName' /> <br>
  //               <input type='submit' />
  //            </form>
  //   `)

  // res.sendFile( path.join(__dirname, '../', 'Views', 'AddProduct.html') )

  res.sendFile(path.join(rootDir, "Views", "AddProduct.html"));
});

hostRouter.post("/add-product", (req, res, next) => {
  console.log(req.body);
  // res.send("<h1>Your Product Successfully Added on Amazon</h1> <br> <a href='/' >Goto Home</a>")
  // res.sendFile( path.join(__dirname, '../', 'Views', 'ProductAdded.html') )
  res.sendFile(path.join(rootDir, "Views", "ProductAdded.html"));
});

module.exports = hostRouter;
