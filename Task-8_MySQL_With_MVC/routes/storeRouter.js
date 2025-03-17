
const express = require('express')
const storeRouter = express.Router()
const path = require('path')
const rootDir = require('../Utils/PathUtil')
const storeController = require('../controllers/StoreController')


storeRouter.use(express.static(path.join(rootDir,'public')))

storeRouter.get('/', storeController.getAllProducts)
storeRouter.get('/cart-list', storeController.getCartData)
storeRouter.get('/favourite-list', storeController.getFavouriteData)
storeRouter.get('/product-list', storeController.getAllProductsList)

storeRouter.get('/product-details/:productId', storeController.getProductDetails)

storeRouter.post('/favourite-list', storeController.postAddFavourites)
storeRouter.post('/favourite-list/remove/:productid', storeController.postRemoveFavourites)

module.exports = storeRouter