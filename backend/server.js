const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
const connectDB = require("./configs/mongodbconnect");
const sendmail = require("./service/sendmail");
const PORT=process.env.PORT;

app.use(cors());

connectDB();

app.use(express.json());

let emailoptions={
    emailTo:"abc@gmail.com",
    emailFrom:"cba@gmail.com",
    link:"abcd",
    filename:"dcba",size:123
}

app.get("/send",(req,res)=>{
    sendmail(emailoptions);
    res.send("MAIL SENT SUCCESFULLY");
})
