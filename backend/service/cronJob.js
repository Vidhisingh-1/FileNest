const cron=require("node-cron");
const markallfilesexpiryindb = require("./markexpiry");

function ExpiryCron()
{
    cron.schedule('30 16 * * *',()=>{
        //every day at 4:30 P.M.
        markallfilesexpiryindb();
    });
}
//minute hour day of month month day of week
module.exports=ExpiryCron;
