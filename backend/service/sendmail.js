const nodemailer=require("nodemailer");
const { transporter } = require("../configs/nodemailer");

const sendmail=async({emailTo,emailFrom,link,filename,size})=>{
    await transporter.sendmail({
        from:emailFrom,
        to:emailTo,
        subject:"Your file is ready to download",
        text:"Hi from your nodemailer project"
    })

}
module.exports=sendmail;