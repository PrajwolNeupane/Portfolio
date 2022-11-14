import mongoose from "mongoose";


const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    image: {
        type: String,
    },
    description:{
        type:String
    }
})



const Skill = mongoose.models.SkillSchema || mongoose.model('Skill', SkillSchema);
export default Skill;

