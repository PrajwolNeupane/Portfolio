import mongoose from "mongoose";


const  UserSchema = new mongoose.Schema({
    email:{
        type:String
    },password:{
        type:String
    }
})



const User = mongoose.models.UserSchema || mongoose.model('User', UserSchema);
export default User;

