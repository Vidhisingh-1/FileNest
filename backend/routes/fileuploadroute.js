const File=require("../models/file.js");
const express=require('express');
const router=express.Router();
const multer=require("multer");
const upload=multer({dest:'uploads/'});
const cloudinary=require("../configs/cloudinaryconfig.js");
const fs=require("fs");
const { shortenurl, shorten } = require("../service/urlservice.js");
const sendmail=require("../service/sendmail.js");

router.post("/upload",upload.single('file'),async(req,res)=>{
    try{
        const {expiry='never'}=req.body;
        if(!req.file)
            return res.status(400).json({error:'No file uploaded'});

        const result=await cloudinary.uploader.upload(req.file.path,{
            resource_type:'auto',

        });
        fs.unlinkSync(req.file.path);
        const shortId=(await shorten(result.url)).shorturl;
        const createdfileinfo=await File.create({
            shortId,
            cloudinaryurl:result.url,
            filename:req.file.originalname,
            size:req.file.size,
            expiry
        })
        await sendmail
        res.json({createdfileinfo});
    }
    catch(err)
    {

    }
})
module.exports=router;