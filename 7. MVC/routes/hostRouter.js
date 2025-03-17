const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../Utils/PathUtil"); 
const productController = require('../controllers/Products')    


hostRouter.use(express.static(path.join(rootDir,'public')))


hostRouter.get("/add-product", productController.getAddProducts);


hostRouter.post("/add-product", productController.postAddProducts );

exports.hostRouter = hostRouter;
