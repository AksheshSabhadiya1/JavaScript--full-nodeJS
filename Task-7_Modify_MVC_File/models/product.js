const path = require('path')
const rootDir = require('../Utils/PathUtil')
const fs = require('fs')

const filepath = path.join(rootDir, 'data', 'product.json')


module.exports = class Product {
  constructor(productName, productPrice, productRating, productImageURL){
    this.productName = productName;
    this.productPrice = productPrice;
    this.productRating = productRating;
    this.productImageURL = productImageURL;
  }

  save(){
    this.id = Math.floor( Math.random() * 1000).toString()
    Product.fetchAll(registarProducts => {
      registarProducts.push(this);
      fs.writeFile(filepath, JSON.stringify(registarProducts), (error)=>{
        console.log(error);
      })
    })
  }

  static fetchAll(callback){
    fs.readFile(filepath, (error, data)=>{
      callback(error ? [] : JSON.parse(data))    
    })
  }

  static findById(productId, callback){
    Product.fetchAll(Products => {
      const productFound = Products.find(item => item.id === productId)
      callback(productFound)
    })
  }
}