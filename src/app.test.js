import express from "express";
import dotenv from "dotenv/config";
import {dirname,join}  from "path";
import { fileURLToPath } from "url";
import userModel from "../models/user.model.js";
import  connectionInstances from "../config/db.js"


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.set("view engine", "ejs");
app.set("views", join(__dirname,"../views"));


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get("/",(req, res)=>{
    res.render("index1.ejs")
})

app.get("/register",async(req,res)=>{
  res.render("register.ejs")
})

app.post("/register",async(req,res,next)=>{
  const {username, email, password, age} = req.body;
  const newUser = await userModel.create({username:username,email:email,password:password,age:age})
  res.send(newUser)
  console.log(newUser)

})

app.get("/getuser", async(req,res)=>{

  //there are 2 methods to read data from mongodb

  //1. using find function
  //this will return array of objects if no match found then it will return empty array
  //if multiple matches found then it will return all matched objects in array

  // userModel.find({
  //   username:'Drdead0'
  // }).then((users)=>{
  //   res.send(users)
  // })

  //2. using findOne function-> this will return single object which is first matched
  //and if is not matched then it will return null
  userModel.findOne({
    username:'Drdead1'
  }).then((users)=>{
    res.send(users)
  })
})

app.get("/update",async(req,res)=>{
  userModel.findOneAndUpdate({
    username:'Drdead1'
  },{
    password:"ItsNothing"
  }).then((user)=>{
    res.send(user)
  })
})


app.get("/delete", async(req,res)=>{
  await userModel.findOneAndDelete({
    _id:'68d737f723c5143cfad5bd1d'
  }).then(()=>{
    res.send("user deleted")
  })
})

app.post("/profile",(req,res, next)=>{
    console.log("Data Received")
    console.log(req.body)
    res.send("data Received")
})


const PORT = process.env.PORT || 3012;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
