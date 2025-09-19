import express from "express";
import dotenv from "dotenv/config";
const app = express();

// dotenv.config(); this is already defined while importing dotenv 


app.get("/",(req,res)=>{
    res.send("hello this is ashish chaurasiya")
})



app.listen(process.env.PORT,()=>{
    console.log("server is running on port 3001")
})