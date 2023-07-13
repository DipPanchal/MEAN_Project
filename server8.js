const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")
// const productController1= require('./Controller/productController1');
const productRoute = require('./routes/product_route');

//middle ware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

//product
app.use("/admin",productRoute)


//moongoose connect
mongoose.connect("mongodb://127.0.0.1:27017/CRUD").then( () => {
    console.log("dbConnected successfully.");
}).catch(()=>{
    console.log("Db not connected");
})

app.listen(9999)