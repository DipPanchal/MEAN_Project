const CsvReaderService = require("../services/csvreader");
const EquityModel = require("../model/equityModel")



module.exports.uploadEquity = async function(req,res){
 
    let allEquity = await CsvReaderService.uploadEquity()
    console.log("allEquity => ");
    console.log(allEquity);

    EquityModel.insertMany(allEquity).then(data=>{
        res.json({msg:"Equity uploaded",data:data,"status":200})
    })
   
}

module.exports.getAllEquity = function(req,res){
    EquityModel.find().populate("industryId").exec().then(data=>{
        res.status(200).json({msg:"Equity Reterived",data:data})
    }).catch(err=>{
        res.status(302).json({msg:"SMW",data:err})
    })
}