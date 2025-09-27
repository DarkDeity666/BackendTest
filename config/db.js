import mongoose from "mongoose";

const connectionInstances =  mongoose.connect('mongodb://0.0.0.0/Backend_Test').then(()=>{
    console.log("Connected to Database")
})

export default connectionInstances;
