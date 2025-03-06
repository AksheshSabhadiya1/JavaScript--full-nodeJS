const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../Utils/PathUtil");     // file-Helper

hostRouter.use(express.static(path.join(rootDir,'public')))

hostRouter.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "AddProduct.html"));
  res.render('AddProduct',{pageTitle: 'Add Product'})
});

const registarProducts = []

hostRouter.post("/add-product", (req, res, next) => {
  console.log(req.body, req.body.productName);
  registarProducts.push({productName: req.body.productName})
  // res.sendFile(path.join(rootDir, "views", "ProductAdded.html"));
  res.render('ProductAdded',{pageTitle: 'Product Added'})
});

exports.hostRouter = hostRouter;
exports.registarProducts = registarProducts;
