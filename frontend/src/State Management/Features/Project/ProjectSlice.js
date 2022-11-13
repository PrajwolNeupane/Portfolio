import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    project:[]
}
const ProjectSlice = createSlice({
    name:"Project",
    initialState,
    reducers:{
        addProject:(state,action) => {
            state.project = action.payload;
        }
    }
});

export default ProjectSlice.reducer;
export const {addProject} = ProjectSlice.actions; 