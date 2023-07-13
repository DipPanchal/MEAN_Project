const express = require("express")
const app=express();
const productController=require("./Controller/productController");


//middle ware

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// use API and
app.post("/addproduct",productController.addProduct)
app.get("/getallproducts",productController.getAllProducts)
app.delete("/deleteproductId/:productId",productController.deleteProductbyId)
// port listening on port
app.listen(9998,() => {
    console.log("server started on 9999")
})