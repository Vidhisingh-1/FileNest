const File=require("./models/File");
async function markallfilesexpiryindb()
{
    try{
        const now=new Date();

        const expiredFiles=await File.find(
            {expiry:{$lte:now},isExpired:false},
        );
        for(let file of expiredFiles)
        {
            try{
                const publicId = file.cloudinaryurl.split("/").pop().split(".")[0];
                await cloudinary.uploader.destroy(publicId);

                file.isExpired=true;
                await file.save();
            }
            catch(err)
            {
                console.error("Error deleting file:",err.message);
            }
        }
    }
    catch(err)
    {
        console.error("Error in marking expired files",err.message);
    }
}
module.exports=markallfilesexpiryindb;