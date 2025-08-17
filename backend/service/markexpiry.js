const File=require("./models/File");
async function markallfilesexpiryindb()
{
    try{
        const now=new Date();

        const result=await File.updateMany(
            {expiry:{$lte:now},isExpired:false},
            {$set:{isExpired:true}}
        );
    }
    catch(err)
    {
        console.error("Error in marking expired files",err.message);
    }
}
module.exports=markallfilesexpiryindb;