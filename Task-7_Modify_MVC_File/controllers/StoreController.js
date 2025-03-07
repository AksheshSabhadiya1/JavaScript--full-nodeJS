const Product = require("../models/product");

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll((registarProducts) =>
    res.render("store/ProductHome", {
      registarProducts: registarProducts,
      pageTitle: "Product Cart HomePage",
      currentPage: "ProductHome",
    })
  );
};

exports.getAllProductsList = (req, res, next) => {

  Product.fetchAll((registarProducts) =>
    res.render("store/Product-list", {
      registarProducts: registarProducts,
      pageTitle: "Product List",
      currentPage: "product-list",
    })
  );
};

exports.getCartData = (req, res, next) => {
  res.render("store/Cart-list", {
    pageTitle: "Cart List",
    currentPage: "cart-list",
  });
};

exports.getFavouriteData = (req, res, next) => {
  res.render("store/Favourite-list", {
    pageTitle: "Favourite List",
    currentPage: "favourite-list",
  });
};

exports.getProductDetails = (req, res, next) => {
  const productId = req.params.productId;

  Product.findById(productId, (product) => {
    if (product) {
      res.render("store/Product-details", {
        product,
        pageTitle: "Product Details",
        currentPage: "product-details",
      });
    } else {
      res.redirect("/product-list");
    }
  });
};
