import express from "express";
import dotenv from "dotenv/config";
const app = express();

 


app.get("/",(req,res)=>{
    res.send("hello this is Ashish Chaurasiya")
})

app.get("/about",(req, res)=>{
    res.send("hello this is the about page")
})

app.listen(process.env.PORT,()=>{
    console.log("server is running on port 3001")
})