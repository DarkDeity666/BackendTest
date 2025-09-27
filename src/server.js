import express from "express";
import dotenv from "dotenv/config";
import {dirname,join} from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename= fileURLToPath(import.meta.url)
const __dirname= dirname(__filename);
app.set("view engine", "ejs");
app.set("views", join(__dirname,"../views"));

//to handle req.body data

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.render("index1.ejs")
})

app.post("/profile",(req,res)=>{
    console.log(req.body);
    res.send("Data Received")
})

const PORT = process.env.PORT || 4010; 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
