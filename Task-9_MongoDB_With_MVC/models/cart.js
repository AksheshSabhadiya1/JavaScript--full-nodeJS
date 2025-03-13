const {getDB} = require('../Utils/database')


module.exports = class Cart {

  constructor(productid){
    this.productid = productid;
  }

  save(){
    const db = getDB()

    return db.collection('cart').findOne({productid: this.productid}).then((productExist)=>{
        if(!productExist){
          return db.collection('cart').insertOne(this)
        } else {
          return Promise.reject()
        }
      })
  }

  static getCart(){
    const db = getDB()
    return db.collection("cart").find().toArray()
  }

  static removeById(delproductid){
    const db = getDB()
    return db.collection('cart').deleteOne({ productid: delproductid })
  }

}