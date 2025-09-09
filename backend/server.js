const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
const connectDB = require("./configs/mongodbconnect");
const sendmail = require("./service/sendmail");
const PORT=process.env.PORT ;
const filerouter=require("./routes/fileuploadroute");
const ExpiryCron = require("./service/cronJob");
const authRoutes=require("./routes/auth.js");
app.use(cors());

app.use(express.json());

connectDB();
ExpiryCron();

app.use('/',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});



//will upload file from postman using form-data in body
