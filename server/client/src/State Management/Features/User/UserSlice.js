import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:null
}
const UserSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        addUser:(state,action) => {
            state.user = action.payload;
        }
    }
});

export default UserSlice.reducer;
export const {addUser} = UserSlice.actions; 