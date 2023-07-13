const express = require("express")
const app = express() 
const royalCalc = require("./royalCalc")

//middleware 
//bodyparser 
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.post("/add",royalCalc.add)

app.listen(9999)