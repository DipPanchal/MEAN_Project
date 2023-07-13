
const express = require("express")
const app = express() 
const calc = require("./calc")



app.get("/time",function(req,res){
    let d = new Date()
    res.end(d+"")    
})


app.get("/day",function(req,res){
    let d = new Date()
    res.end(d.getDate()+"")
})

app.get("/",function(req,res){
    res.end("Welcome")
})

app.get("/calc",calc.addition)

app.listen(9999)