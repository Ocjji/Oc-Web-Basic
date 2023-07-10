import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./modules/noticeSlice";
import customerReducer from "./modules/customerSlice";

export const store = configureStore({
    reducer: {
        noticeR: noticeReducer,
        customerR: customerReducer
    }
})