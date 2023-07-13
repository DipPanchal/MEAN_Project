const CategoryModel = require('../modal/categoryModel');

module.exports.addCategory = function(req,res){
    let categroy= new CategoryModel({
        categoryName : req.body.categoryName,
        categoryEmail:req.body.categoryEmail
    })

    categroy.save().then((data)=>{
        res.json({"msg":"Category Save","data":data,"rcode":200})
    }).catch((err)=>{
        res.json({"msg":"err","data":err,"rcode":-9})
    })
}

module.exports.getAllCategory=function(req,res){

    CategoryModel.find().then((data)=>{
        res.json({"msg":"Category retrived...","data":data,"rcode":200})
    }).catch((err)=>{
        res.json({"msg":"Category not retrived...","data":data,"rcode":-9})
    })
}