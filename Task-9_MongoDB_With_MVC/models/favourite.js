const { getDB } = require("../Utils/database");
const { ObjectId } = require("mongodb");


module.exports = class Favourite {

  constructor(productid) {
    this.productid = productid;
  }

  save() {
    const db = getDB()

    return db.collection('favourites').findOne({ productid: this.productid }).then((itemExist) => {
      if (!itemExist) {
        return db.collection('favourites').insertOne(this)
      } else {
        return Promise.resolve()
      }
    })
  }

  static getFavourite() {
    const db = getDB()
    return db.collection('favourites').find().toArray()
  }

  static removeById(delproductId) {
    const db = getDB()
    return db.collection('favourites').deleteOne({ productid: delproductId })
  }
}