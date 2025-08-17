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
        type:Boolean,
        default:false
    },
    filename:String,
    size:Number,
},
    {timestamps:true}
);
module.exports=mongoose.model('File',fileSchema);