const nodemailer=require("nodemailer");
const { transporter } = require("../configs/nodemailer");

const sendmail=async({emailTo,emailFrom,link,filename,size})=>{
    await transporter.sendmail({
        from:emailFrom,
        to:emailTo,
        subject:"Your file is ready to download",
        text:"Hi from your nodemailer project"
    },function(err,data){
        if(err){
            console.log("ERROR"+err);
        }
        else{
            console.log("Email sent successfully");
        }
    })

}
module.exports=sendmail;