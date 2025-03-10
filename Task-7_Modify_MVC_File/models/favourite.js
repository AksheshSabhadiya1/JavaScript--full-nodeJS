const path = require('path')
const rootDir = require('../Utils/PathUtil')
const fs = require('fs')
const Product = require('./product')

const favouritepath = path.join(rootDir, 'data', 'favourite.json')


module.exports = class Favourite {
  
  static addToFavourite(productid, callback){
    Favourite.getFavourite((favourite)=>{
      if(favourite.includes(productid)){
        callback("product already marked as favourite");
      }else{
        favourite.push(productid)
        fs.writeFile(favouritepath, JSON.stringify(favourite),callback)
      }
    })
  }

  static getFavourite(callback){
    fs.readFile(favouritepath, (error, data) => {
      callback(!error ? JSON.parse(data) : [])
    })
  }

  static deleteById(delproductId, callback){
      Favourite.getFavourite(Productids => {
        Productids = Productids.filter(itemid => delproductId !== itemid) 
        fs.writeFile(favouritepath, JSON.stringify(Productids), callback)
      })
  }
}