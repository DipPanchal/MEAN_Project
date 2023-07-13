const express = require('express')
const productController1= require('../Controller/productController1');
const route=express.Router()

//this route connected to server8 (product CRUD opeartion)

route.post("/addproduct",productController1.addProduct)
route.get("/productlist",productController1.getAllProducts)
route.put("/updateproduct",productController1.updateProduct)
route.get("/product/:productId",productController1.getProductById)
route.delete("/product/:productId",productController1.deleteProductById)
route.post("/products/filter",productController1.filterProducts)

module.exports = route