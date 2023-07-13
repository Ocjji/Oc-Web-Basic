import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./modules/playerSlice";


export const store = configureStore({
    reducer: {
        playerR: playerReducer
    }
})