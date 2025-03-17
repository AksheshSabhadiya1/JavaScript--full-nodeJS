const Favourite = require("../models/favourite");
const Product = require("../models/product");

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll().then(([registarProducts])=>{
    res.render("store/ProductHome", {
      registarProducts: registarProducts,
      pageTitle: "Product Cart HomePage",
      currentPage: "ProductHome",
    })
  })
};

exports.getAllProductsList = (req, res, next) => {
  Product.fetchAll().then(([registarProducts])=>{
    res.render("store/Product-list", {
      registarProducts: registarProducts,
      pageTitle: "Product List",
      currentPage: "product-list",
    })
  })
};

exports.getProductDetails = (req, res, next) => {
  const productId = req.params.productId;

  Product.findById(productId).then(([products]) => {
    const product = products[0]
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

exports.getCartData = (req, res, next) => {
  res.render("store/Cart-list", {
    pageTitle: "Cart List",
    currentPage: "cart-list",
  });
};

exports.getFavouriteData = (req, res, next) => {
  Favourite.getFavourite((favourite) => {
    Product.fetchAll().then(([products])=>{
      // const favouriteList = products.filter(item => item.id === favourite.id)
      const favouriteList = favourite?.map(product => products?.find(item => item.id === product._id))
      res.render("store/Favourite-list", {
        favouriteList: favouriteList,
        pageTitle: "Favourite List",
        currentPage: "favourite-list",
      });
    })
  })
};

exports.postAddFavourites = (req, res, next) => {
  Favourite.addToFavourite(req.body.productid, (error)=>{
    if(error){
      console.log("Error while adding to favourite: ",error);
    }
    res.redirect("/favourite-list")
  })
}

exports.postRemoveFavourites = (req, res, next) => {
  const productid = req.params.productid
  Favourite.removeById(productid, error => { 
    if(error){
      console.log(error);
    }
  })
  res.redirect('/favourite-list')
}

