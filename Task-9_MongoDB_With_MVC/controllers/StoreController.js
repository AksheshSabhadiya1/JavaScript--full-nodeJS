const Cart = require("../models/cart");
const Favourite = require("../models/favourite");
const Product = require("../models/product");

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll().then((registarProducts) => {
    res.render("store/ProductHome", {
      registarProducts: registarProducts,
      pageTitle: "Product Cart HomePage",
      currentPage: "ProductHome",
    });
  });
};

exports.getAllProductsList = (req, res, next) => {
  Product.fetchAll().then((registarProducts) => {
    res.render("store/Product-list", {
      registarProducts: registarProducts,
      pageTitle: "Product List",
      currentPage: "product-list",
    });
  });
};

exports.getProductDetails = (req, res, next) => {
  const productId = req.params.productId;

  Product.findById(productId).then((product) => {
    if (product) {
      res.render("store/Product-details", {
        product,
        pageTitle: "Product Details",
        currentPage: "product-details",
      });
    } else {
      console.log("Product not found");
      res.redirect("/product-list");
    }
  });
};

exports.getCartData = (req, res, next) => {
  Cart.getCart().then((cartData)=>{
    cartData = cartData.map((cart)=> cart.productid);
    Product.fetchAll().then((products)=>{
      const cartList = products.filter((item) => cartData.includes(item._id.toString()))
      res.render("store/Cart-list", {
        cartList: cartList,
        pageTitle: "Cart List",
        currentPage: "cart-list",
      });
    })
  })
};

exports.postCartData = (req, res, next) => {
  const productid = req.body.productid;
  const cart = new Cart(productid)
  cart.save().then(() => {
    console.log("Add to cart Sucessfully");
  })
  .catch(() => {
    console.log("Already avialable in cart");
  })
  .finally(() => {
    res.redirect("/cart-list");
  });
}

exports.removeCartData = (req, res, next) => {
  const productid = req.params.productid;
  Cart.removeById(productid).then(() => {
    console.log("Delete Sucessfully");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    res.redirect("/cart-list");
  });
}

exports.getFavouriteData = (req, res, next) => {
  Favourite.getFavourite().then((favourite) => {
    favourite = favourite.map((fav) => fav.productid);
    Product.fetchAll().then((products) => {
      const favouriteList = products.filter((item) => favourite.includes(item._id.toString()));
      res.render("store/Favourite-list", {
        favouriteList: favouriteList,
        pageTitle: "Favourite List",
        currentPage: "favourite-list",
      });
    });
  });
};

exports.postAddFavourites = (req, res, next) => {
  const productid = req.body.productid;
  const fav = new Favourite(productid);
  fav.save()
    .then(() => {
      console.log("Add to Favourite Sucessfully");
    })
    .catch(() => {
      console.log("Already Marked as favourite");
    })
    .finally(() => {
      res.redirect("/favourite-list");
    });
};

exports.postRemoveFavourites = (req, res, next) => {
  const productid = req.params.productid;
  Favourite.removeById(productid)
    .then(() => {
      console.log("Remove Sucessfully");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/favourite-list");
    });
};
