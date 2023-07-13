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
mongoose.connect("mongodb+srv://panchaldip029:avvDovev0I3CBeuo@cluster0.i7g83up.mongodb.net/").then( () => {
    console.log("dbConnected successfully.");
}).catch(()=>{
    console.log("Db not connected");
})

app.listen(9999)