import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    // gender:{
    //     type: String,
    //     enum:['male','female']
    // }
})

const userModel = mongoose.model("users", UserSchema)

export default userModel;