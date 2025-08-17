const cron=require("node-cron");

function ExpiryCron()
{
    cron.schedule('* * * * *',()=>{
        //every day at 4:30 P.M.
        markallfilesexpiryindb();
    });
}
//minute hour day of month month day of week
module.exports=ExpiryCron;
