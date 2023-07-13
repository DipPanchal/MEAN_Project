const CsvReaderService = require("../services/csvreader");

const industryModel= require("../modal/industryModel");

module.exports.uploadIndustry = async function(req,res){
 
    let allInudstry = await CsvReaderService.uploadIndustry()

    industryModel.insertMany(allInudstry).then(data=>{
        res.json({data:data,msg:"Industery Uploaded",status:200})
    })
   
}


module.exports.uploadEquity = async function(req,res){
 
    let allInudstry = await CsvReaderService.uploadEquity()

    industryModel.insertMany(allInudstry).then(data=>{
        res.json({data:data,msg:"Industery Uploaded",status:200})
    })
   
}