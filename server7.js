const express = require("express")
const mongoose = require("mongoose")
const productController = require("./Controller/productControllerDb")
const categoryController = require("./Controller/categoryController")
const industryController = require("./Controller/industryController")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/mean23").then( () => {
    console.log("dbConnected...");
})


app.post("/addproduct2",productController.addProduct)
app.get("/products",productController.getAllProducts)
app.get("/product/:productId",productController.getProductById)
app.delete("/product/:productId",productController.deleteProductById)
app.post("/products/filter",productController.filterProducts)
app.put("/product",productController.updateProduct)


app.post("/category",categoryController.addCategory)
app.get("/categories",categoryController.getAllCategory)


//industry Routes 
app.post("/industry",industryController.uploadIndustry)

app.listen(9999)