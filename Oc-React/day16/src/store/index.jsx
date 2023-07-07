import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./modules/todoSlice";
import userReducer from "./modules/userSlice";

export const store = configureStore({
    reducer: {
        todoReducer,
        userReducer
    }
});