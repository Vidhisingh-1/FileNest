const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
const PORT=process.env.PORT;

app.use(cors());
