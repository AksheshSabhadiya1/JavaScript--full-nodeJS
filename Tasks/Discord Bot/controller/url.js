const URL = require('../models/model')
const { nanoid } = require('nanoid')

const handleURL = async(url)=>{

  const shortId = nanoid(8)

  const urlData = await URL.create({
    shorturl: shortId,
    redirecturl: url
  })

  return urlData
}

module.exports = { handleURL }