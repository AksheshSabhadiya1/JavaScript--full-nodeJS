const { ObjectId } = require("mongodb");
const { getDB } = require("../Utils/database");


module.exports = class Product {
  constructor(productName, productPrice, productRating, productImageURL, description, _id) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productRating = productRating;
    this.productImageURL = productImageURL;
    this.description = description;
    if (_id) {
      this._id = _id;
    }
  }

  save() {
    const db = getDB()
    if (this._id) {  //update
      const updateObj = {
        productName: this.productName,
        productPrice: this.productPrice,
        productRating: this.productRating,
        productImageURL: this.productImageURL,
        description: this.description
      }
      return db.collection('products').updateOne({ _id: new ObjectId(String(this._id)) }, { $set: updateObj })
    } else { //insert
      return db.collection('products').insertOne(this)
    }
  }

  static fetchAll() {
    const db = getDB()
    return db.collection('products').find().toArray()
  }

  static findById(productId) {
    const db = getDB()
    return db.collection('products').find({ _id: new ObjectId(String(productId)) }).next()
  }

  static deleteById(productId) {
    const db = getDB()
    return db.collection('products').deleteOne({ _id: new ObjectId(String(productId)) })
  }


}