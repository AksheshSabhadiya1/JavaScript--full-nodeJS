const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("AddProduct", {
    pageTitle: "Add Product",
    currentPage: "AddProduct",
  });
};

exports.postAddProducts = (req, res, next) => {
  console.log(req.body);

  const { productName, productPrice, productRating, productImage } = req.body;
  const product = new Product(
    productName,
    productPrice,
    productRating,
    productImage
  );
  product.save();

  res.render("ProductAdded", {
    pageTitle: "Product Added",
    currentPage: "ProductAdded",
  });
};

exports.getAllProducts = (req, res, next) => {
  new Product().fetchAll((registarProducts) =>
    res.render("ProductHome", {
      registarProducts: registarProducts,
      pageTitle: "Product Cart HomePage",
      currentPage: "ProductHome",
    })
  );
};
