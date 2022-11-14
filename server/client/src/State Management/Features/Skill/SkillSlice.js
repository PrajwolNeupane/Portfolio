import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    skill:[]
}
const SkillSlice = createSlice({
    name:"Skill",
    initialState,
    reducers:{
        addSkill:(state,action) => {
            state.skill = action.payload;
        }
    }
});

export default SkillSlice.reducer;
export const {addSkill} = SkillSlice.actions; 