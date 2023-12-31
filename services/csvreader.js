const fs = require("fs")
const CsvReader = require('csv-reader')
const industryModel = require("../modal/industryModel")
const equityModel = require("../modal/equityModel")
// function readfile(){
//     let myfile=fs.createReadStream("./seed/ind_nifty50list.csv", "utf8")

//     myfile.pipe(new CsvReader({ parseNumbers: true, parseBooleans: true, trim: true }))
//     .on('data',function(row){
//         console.log("A row arrived",row[0]);
//     })
//     .on('end',function(){
//         console.log("No more rows");
//     })
// }

module.exports.uploadIndustry = async function(){
    //seed ind_nifty50list.csv 
    let myfile=fs.createReadStream("./seed/ind_nifty50list.csv", "utf8")
     let industryArray=[];
    industryModel.find().then(data=>{
      console.log("data------>",data);
      myDataFromDb=data
    })

    let promise= new Promise((resolve,reject)=>{
          myfile.pipe(new CsvReader({parseNumbers: true, parseBooleans: true, trim: true }))
          .on('data',function(row){
            console.log("row",row);
               if(industryArray.indexOf(row[1].toLowerCase())==-1){
                  industryArray.push(row[1].toLowerCase());
               }
          })
          .on('end',function(){
            console.log(industryArray);
            let industryJson = []

            for(i=0;i<myDataFromDb.length;i++)
            {
              if(industryArray.indexOf(myDataFromDb[i].name.toLowerCase()) != -1 ){ 
                delete industryArray[industryArray.indexOf(myDataFromDb[i].name)]   

            }
            }
            industryArray.forEach(item=>industryJson.push({"name":item}))
            console.log("=====>");
            console.log(industryJson);
            resolve(industryJson);
          })  
    }) 

    let data=await promise;
    console.log("The End");
    return data;
}

//equity 
module.exports.uploadEquity = async function(){
  //seed ind_nifty50list.csv 
  let eqArray = []  // {name,isin,industry:5hb6j54h6j5hj,XXXX,XXX} 
  let myFile = fs.createReadStream("./seed/ind_nifty50list.csv","utf8")
  let industryDb  = []   // [ {name,_id,_v },{name,_id,_v},... ]
  let equityDb = [] 

  // industry -> db all 
  //select * from industry 
  industryModel.find().then(data=>{
      industryDb = data; 
  })

  equityModel.find({},{_id:0,name:1}).then(data=>{
      data.forEach(item=>equityDb.push(item.name))
      console.log("equityDb");
      console.log(equityDb);  // [x,y,z,f,gh]
  })

  let promise = new Promise((resolve,reject)=>{
      myFile.pipe(new CsvReader())
      .on('data',function(row){

              let industryName = row[1] // id -> industryDb

              for(let i=0;i<industryDb.length;i++){
                  if(industryDb[i].name.toLowerCase() == industryName.toLowerCase()   && eqArray.indexOf(row[0].toLowerCase()) == -1 ){

                      let eq = {name:row[0],symbol:row[2],isin:row[4],industryId:industryDb[i]._id} 
                      eqArray.push(eq); 
                  }
              }

              
                             
      })
      .on('end',function(){
             
          resolve(eqArray) //return 
      })     
  })
 let data = await promise;   
  console.log("THE END");
  return data;

}