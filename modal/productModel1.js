const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  qty: Number,
  pDescription: String
});


module.exports  = mongoose.model('Product1', ProductSchema); //products 
 