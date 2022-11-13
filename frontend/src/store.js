import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './State Management/Features/Project/ProjectSlice.js';
import SkillSlice from './State Management/Features/Skill/SkillSlice.js';
import MessageSlice from './State Management/Features/Message/MessageSlice.js';
import UserSlice from './State Management/Features/User/UserSlice.js';

export const Store = configureStore({
    reducer: {
        Project: ProjectSlice,
        Skill:SkillSlice,
        Message:MessageSlice,
        User:UserSlice
    }, middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});