const path = require('path')
const rootDir = require('../Utils/PathUtil')
const fs = require('fs')
const Favourite = require('../models/favourite')

const filepath = path.join(rootDir, 'data', 'product.json')


module.exports = class Product {
  constructor(productName, productPrice, productRating, productImageURL){
    this.productName = productName;
    this.productPrice = productPrice;
    this.productRating = productRating;
    this.productImageURL = productImageURL;
  }

  save(){
    Product.fetchAll(registarProducts => {
      if(this.id){ //edit product
        registarProducts = registarProducts.map(product => product.id === this.id ? this : product)

      }else { //add product
        this.id = Math.floor( Math.random() * 1000).toString()
        registarProducts.push(this);
      }

      fs.writeFile(filepath, JSON.stringify(registarProducts), (error)=>{
        console.log(error);
      })
    })
  }

  static fetchAll(callback){
    fs.readFile(filepath, (error, data)=>{
      callback(!error ? JSON.parse(data) : [])    
    })
  }

  static findById(productId, callback){
    Product.fetchAll(Products => {
      const productFound = Products.find(item => item.id === productId)
      callback(productFound)
    })
  }

  static deleteById(productId, callback){
    this.fetchAll(Products => {
      Products = Products.filter(item => item.id !== productId)
      fs.writeFile(filepath, JSON.stringify(Products), callback)
    })
  }

  

  // static setFavourite(productid, callback) {
  //   Product.fetchAll(Products => {
  //     const productFound = Products.find(item => item.id === productid)
  //     console.log(productFound);
  //     callback(productFound)
  //   })
  // }
}