const express = require("express");
const adminRouter = express.Router();
const path = require("path");
const rootDir = require("../Utils/PathUtil"); 
const adminController = require('../controllers/AdminController')    


adminRouter.use(express.static(path.join(rootDir,'public')))


adminRouter.get("/add-product", adminController.getAddProducts);
adminRouter.post("/add-product", adminController.postAddProducts );
adminRouter.get('/admin-productlist', adminController.getAdminAllProductsList)

module.exports = adminRouter;
