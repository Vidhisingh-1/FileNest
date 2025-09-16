const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const cloudinary = require('../configs/cloudinaryConfig');
const axios = require('axios');
const File = require('../models/file');
const fileTypeValidator = require('../middlewares/fileValidator');
const validateToken = require('../middlewares/tokenValidator');
const { shorten } = require('../service/urlservice');

router.post("/upload",upload.single('file'),validateToken,fileTypeValidator,async(req,res)=>{
    try{
        const expiry = req.body.expiry;

        if (!req.file)
        {
            res.json({
                message : "No file uploaded"
            });
            return;
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type : 'auto'
        });

        fs.unlinkSync(req.file.path);

        const shortDoc=(await shorten(result.secure_url));
        const shortId=shortDoc.shorturl;
        const createdFile=await File.create({
            userName:req.body.userName,
            shortUrl:shortId,
            cloudinaryurl:result.secure_url,
            filename:req.file.originalname,
            size:req.file.size,
            expiryAt:new Date(expiry).getTime(),
            createdAt:Date.now(),
        });
        
        res.json({createdFile});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({error:err.message});
    }
})
module.exports=router;