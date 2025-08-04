const mongoose=require("mongoose");
const { date } = require("zod");

const fileSchema=new mongoose.Schema({
    shortId:{
        type:String,
        unique:true,
        required:true
    },
    cloudinaryurl:{
        type:String,
        required:true
    },
    expiry:{
        type:Date,
    },
    isExpired:{
        type:boolean,
        default:false
    },
    filename:String,
    size:Number,
    createdAt:Date,
    updatedAt:Date
});
module.exports=mongoose.model('File',fileSchema);