import { configureStore } from '@reduxjs/toolkit';
import counter from './modules/counterSlice';
import colorList from './modules/colorListSlice';
import todo from './modules/todoSlice';

export const store = configureStore({
    reducer: {
        counter,
        colorList,
        todo
    }
})