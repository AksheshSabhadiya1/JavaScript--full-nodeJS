const path = require('path')
const rootDir = require('../Utils/PathUtil')
const fs = require('fs')


module.exports = class Product {
  constructor(productName, productPrice, productRating, productImage){
    this.productName = productName;
    this.productPrice = productPrice;
    this.productRating = productRating;
    this.productImage = productImage;
  }

  save(){
    this.fetchAll(registarProducts => {
      registarProducts.push(this);
      const filepath = path.join(rootDir, 'data', 'product.json')
      fs.writeFile(filepath, JSON.stringify(registarProducts), (error)=>{
        console.log(error);
      })
    })
  }

  fetchAll(callback){
    const filepath = path.join(rootDir, 'data', 'product.json')
    fs.readFile(filepath, (error, data)=>{
      callback(error ? [] : JSON.parse(data))      
    })
  }
}