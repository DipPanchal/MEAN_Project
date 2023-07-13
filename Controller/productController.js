
var products=[]

let p1  = { 
    "productId":123456,
    "productName":"Legion y520",
    "price":120000,
    "qty":15
}

products.push(p1)

console.log("products loaded -> ",products);

// for add products
function addProduct(req,res){

     let productName=req.body.productName;
     let price=req.body.price;
     let qty=req.body.qty;
     let productId=parseInt(Math.random()*1000000);


     let product = {
        "productId": productId,
        "productName": productName,
        "price": price,
        "qty": qty
    }
  
     products.push(product);
     res.json({"msg":"product retrieved successfully","data":products,"rcode":200})

}

// for getAllProducts
function getAllProducts(req,res){
    res.json({ "msg": "Product Ret.", "data": products, "rcode": 200 })
}

//FOR deleteProduct

function deleteProductbyId(req,res)
{
    const productId=req.params.productId;
    console.log("projectId",productId);
    console.log(`ProjectId: ${productId}`)

    oldLength=products.length;
    products= products.filter(p=>p.productId!=productId)
    newLength=products.length

     if(oldLength==newLength){
        res.json({ "msg": "Invalid Product Id", "data": productId, "rcode": -9 }) 
     }
     else{
        res.json({ "msg": "product deleted", "data": productId, "rcode": 200 })
     }
}

module.exports.addProduct = addProduct  
module.exports.getAllProducts = getAllProducts
module.exports.deleteProductbyId = deleteProductbyId      