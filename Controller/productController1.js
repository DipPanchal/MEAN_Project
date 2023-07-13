const productModel= require("../modal/productModel1")

module.exports.addProduct = function(req,res){
    let productName = req.body.productName
    let price = req.body.price
    let qty= req.body.qty
    let pDescription= req.body.pDescription

    const product= new productModel({
        "productName":productName,
        "price":price,
        "qty": qty,
        "pDescription": pDescription
    });

    product.save();
    res.json({ "msg": "Product Added", "data": product, "rcode": 200 })
}

module.exports.getAllProducts = function(req,res){
    productModel.find().then((data)=>{
        res.json({"msg":"Product list","data":data,"rcode":200})  
    }).catch((err)=>{
        res.json({"msg":"SMW","rcode":-9,"data":err})
    })
  }

  module.exports.updateProduct = function(req,res){
    let productId = req.body.productId 
    let productName=req.body.productName
    let price = req.body.price  
    let qty = req.body.qty 
    let pDescription=req.body.pDescription

    productModel.updateOne({_id:productId},{"price":price,"qty":qty,"productName":productName,"pDescription":pDescription}).then((data)=>{
        res.json({"msg":"product updated","data":data,"rcode":200})
    }).catch((err)=>{
        res.json({"msg":"product updation fails","data":data,"rcode":200})      
    })
}

module.exports.getProductById = function(req,res){
    let productId = req.params.productId 
    productModel.findById({_id:productId}).then((data)=>{
        res.json({"msg":"Product Ret","data":data,"rcode":200})  
    }).catch((err)=>{
        res.json({"msg":"SMW","rcode":-9,"data":err})  
    })
 } 

 module.exports.deleteProductById = function(req,res){
    let productId = req.params.productId

    productModel.findByIdAndDelete({_id:productId}).then((data)=>{
        res.json({"msg":"Product Deleted","data":data,"rcode":200})  
    }).catch((err)=>{
        res.json({"msg":"SMW","rcode":-9,"data":err})  
    })
}



module.exports.filterProducts = function (req, res) {
    let minPrice = req.body.minPrice
    let maxPrice = req.body.maxPrice

    productModel.find({
        $and: [
            {
                price: {
                    $gt: minPrice
                }
            },
            {
                price: {
                    $lt: maxPrice
                }
            }
        ]

    }).then((data) => {
        if (data.length == 0) {
            res.json({ "msg": "No Data Found ", "data": req.body, "rcode": -9 })
        } else {
            res.json({ "msg": "Product filter ", "data": data, "rcode": 200 })
        }
    }).catch((err) => {
        res.json({ "msg": "SMW ", "data": err, "rcode": -9 })
    })
}
