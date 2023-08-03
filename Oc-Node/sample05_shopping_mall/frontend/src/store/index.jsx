import { configureStore } from "@reduxjs/toolkit";
import cart from './modules/cartSlice' 

export const store = configureStore({
    reducer: {
        cart
    }
})