const express = require('express')
const urlRouter = express.Router()
const {generateNewShortURL, getAnalytics, getURLById} = require('../controllers/url')


urlRouter.post('/', generateNewShortURL)
urlRouter.get('/:shortId', getURLById)
urlRouter.get('/analytics/:shortId', getAnalytics)

module.exports = urlRouter