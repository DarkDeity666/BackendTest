import express from "express";
import dotenv from "dotenv/config";
import {dirname,join}  from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";


const app = express();


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set("view engine", "ejs")
app.set("views",join(__dirname,"../views"));
console.log(__dirname)
 



//custom middleware
// app.use((req,res,next)=>{
//     console.log("this is ,middleware");
//     next();
// })

//third party middleware
app.use(morgan("dev"))

app.get("/",(req,res,next)=>{
    console.log("this is the home page");
    next();
},(req,res)=>{
    res.render("index.ejs")
})

app.get("/about",(req, res)=>{
    res.send("hello this is the about page")
})

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})