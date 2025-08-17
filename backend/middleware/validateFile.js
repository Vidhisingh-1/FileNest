const multer=require("multer");
function validateFile(req,res,next)
{
    if(!req.file)
    {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const allowedTypes=["image/jpeg","image/png","application/pdf"];
    if(!allowedTypes.includes(req.file.mimetype))
    {
         return res.status(400).json({ error: "Invalid file type. Only JPG, PNG, PDF allowed." });
    }

    if (req.file.size > 10 * 1024 * 1024) {
        return res.status(400).json({ error: "File too large. Max 10MB allowed." });
    }

    next();
    
}
module.exports={validateFile};