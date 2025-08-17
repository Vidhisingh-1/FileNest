const nodemailer=require("nodemailer");
const { transporter } = require("../configs/nodemailer");

const sendmail=async({emailTo,emailFrom,link,filename,size})=>{
    try{
    await transporter.sendMail({
        from:emailFrom,
        to:emailTo,
        subject:"Your file is ready to download",

        html:`
        <p>Hello,</p>
                <p>Your file <b>${filename}</b> (${(size/1024/1024).toFixed(2)} MB) is ready for download.</p>
                <p>Click here to download: <a href="${link}"</a></p>
                <p>This link may expire soon.</p>
                `
    });
    console.log("Mail sent to ",emailTo);
    }
    catch(err)
    {
        console.error("Error sending mail:",err.message);
    }

};
module.exports=sendmail;