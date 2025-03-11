const Favourite = require("../models/favourite");
const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/EditProduct", {
    pageTitle: "Add Product",
    currentPage: "AddProduct",
    editing: false,
  });
};

exports.getEditProducts = (req, res, next) => {
  const productId = req.params.productid              // id
  const editing = req.query.editing === 'true'       // query parameter
  console.log(productId, editing);

  Product.findById(productId, product => {
    if(!product){
      console.log("Product Not Found");
      return res.redirect("/admin/admin-productlist")
    }
    console.log(productId, editing, product);
    res.render("admin/EditProduct", {
      product: product,
      pageTitle: "Edit Product",
      currentPage: "admin-productlist",
      editing: editing,
    });
  })
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
  res.redirect('/admin/admin-productlist')
};

exports.postEditProducts = (req, res, next) =>{
  const { id, productName, productPrice, productRating, productImageURL } = req.body;
  const product = new Product(
    productName,
    productPrice,
    productRating,
    productImageURL
  );
  product.id = id
  product.save();
  res.redirect('/admin/admin-productlist')
}


exports.getAdminAllProductsList = (req, res, next) => {
  Product.fetchAll((registarProducts) =>
    res.render("admin/Admin-Productlist", {
      registarProducts: registarProducts,
      pageTitle: "Admin Product List",
      currentPage: "admin-productlist",
    })
  );
};


exports.postDeleteProducts = (req, res, next) => {
  const productid = req.params.productid
  Product.deleteById(productid, error => {
    if(error){
      console.log(error);
    }else{
    Favourite.removeById(productid, error => {
      console.log(error);
    })
    }
  })
  res.redirect('/admin/admin-productlist')
};