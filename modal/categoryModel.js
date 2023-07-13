const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: { value: true, message: "Please Enter CategoryName" },
        lowercase: true       
    },
    categoryEmail:{
      type:String
    }

})

module.exports = mongoose.model("Category",CategorySchema);