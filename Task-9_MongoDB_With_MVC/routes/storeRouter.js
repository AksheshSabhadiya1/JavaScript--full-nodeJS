
const express = require('express')
const storeRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtil')
const storeController = require('../controllers/StoreController')


storeRouter.use(express.static(path.join(rootDir,'public')))

storeRouter.get('/', storeController.getAllProducts)

storeRouter.get('/product-list', storeController.getAllProductsList)
storeRouter.get('/product-details/:productId', storeController.getProductDetails)


storeRouter.get('/favourite-list', storeController.getFavouriteData)
storeRouter.post('/favourite-list', storeController.postAddFavourites)
storeRouter.post('/favourite-list/remove/:productid', storeController.postRemoveFavourites)

storeRouter.get('/cart-list', storeController.getCartData)
storeRouter.post('/cart-list', storeController.postCartData)
storeRouter.post('/cart-list/remove/:productid', storeController.removeCartData)

module.exports = storeRouter