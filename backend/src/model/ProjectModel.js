import mongoose from "mongoose";


const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    }, tagline: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
})



const Project = mongoose.models.ProjectSchema || mongoose.model('Project', ProjectSchema);
export default Project;

