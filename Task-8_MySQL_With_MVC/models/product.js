const db = require('../Utils/database')


module.exports = class Product {
  constructor(productName, productPrice, productRating, productImageURL, description, id){
    this.productName = productName;
    this.productPrice = productPrice;
    this.productRating = productRating;
    this.productImageURL = productImageURL;
    this.description = description;
    this.id = id;
  }

  save(){
    if(this.id){  //update
      return db.execute('UPDATE products SET productName=?, productPrice=?, productRating=?, productImageURL=?, description=? WHERE id=?', [this.productName, this.productPrice, this.productRating, this.productImageURL, this.description, this.id])
    } else{ //insert
      return db.execute('INSERT INTO products (productName, productPrice, productRating, productImageURL, description) VALUES (?, ?, ?, ?, ?)', [this.productName, this.productPrice, this.productRating, this.productImageURL, this.description])
    }
    
  }

  static fetchAll(){
    return db.execute('SELECT * FROM products')
  }

  static findById(productId){
    return db.execute('SELECT * FROM products WHERE id=?', [productId])
  }

  static deleteById(productId){
    return db.execute('DELETE FROM products WHERE id=?', [productId])
  }

  
}