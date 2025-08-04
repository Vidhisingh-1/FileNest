const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
const connectDB = require("./configs/mongodbconnect");
const sendmail = require("./service/sendmail");
const PORT=process.env.PORT;
const filerouter=require("./routes/fileuploadroute");

app.use(cors());

connectDB();

app.use(express.json());

let emailoptions={
    emailTo:"singhvidhiii.9@gmail.com",
    emailFrom:"vidhi.singh.parihar.2711@gmail.com",
    link:"abcd",
    filename:"dcba",
    size:123
}

app.use('/',filerouter);

//will upload file from postman using form-data in body
