import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({
    email:{
        type:String
    },
    message:{
        type:String
    }
})



const Message = mongoose.models.MessageSchema || mongoose.model('Message', MessageSchema);
export default Message;

