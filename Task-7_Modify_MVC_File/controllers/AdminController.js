const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/AddProduct", {
    pageTitle: "Add Product",
    currentPage: "AddProduct",
  });
};

exports.postAddProducts = (req, res, next) => {
  const { productName, productPrice, productRating, productImageURL } = req.body;
  const product = new Product(
    productName,
    productPrice,
    productRating,
    productImageURL
  );
  product.save();
  res.render("admin/ProductAdded", {
    pageTitle: "Product Added",
    currentPage: "ProductAdded",
  });
};

exports.getAdminAllProductsList = (req, res, next) => {
  Product.fetchAll((registarProducts) =>
    res.render("admin/Admin-Productlist", {
      registarProducts: registarProducts,
      pageTitle: "Admin Product List",
      currentPage: "admin-productlist",
    })
  );
};
