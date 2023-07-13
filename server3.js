//npm install express 

const order = require("./order")
const app = express() 

app.get("/welcome",function(req,res){
    res.end("Welcome")
})

app.get("/vieworders",order.viewOrders)
app.get("/vieworderbyid",order.viewOrderById)
app.post("/view",order.viewOrderById)



app.listen(9999)  // 1 - 65536 {1521,3306,80,8080,8080,9000,1443,1441,1431,2700}


//website 

//order -> viewmyorder , viewallorder , 
//product
//customer
//vendor
//payment 
//30 -> url 