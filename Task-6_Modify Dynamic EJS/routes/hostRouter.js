const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../Utils/PathUtil");     // file-Helper

hostRouter.use(express.static(path.join(rootDir,'public')))

hostRouter.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "AddProduct.html"));
  res.render('AddProduct',{pageTitle: 'Add Product', currentPage: 'AddProduct'})
});

const registarProducts = []

hostRouter.post("/add-product", (req, res, next) => {
  console.log(req.body, req.body.productName);
  registarProducts.push(req.body)
  // res.sendFile(path.join(rootDir, "views", "ProductAdded.html"));  productName: req.body.productName, productPrice: req.body.productPrice, productRating: req.body.productRating, productImage: req.body.productImage
  res.render('ProductAdded',{pageTitle: 'Product Added', currentPage: 'ProductAdded'})
});

exports.hostRouter = hostRouter;
exports.registarProducts = registarProducts;
