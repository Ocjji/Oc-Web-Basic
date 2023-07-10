import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    cartTotal: 0
};
export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addCart(state, action) {
            state.carts.push(action.payload);
        },
        removeCart(state, action) {
            state.carts = state.carts.filter(item => item.id !== action.payload);
        },
        totalPrice(state, action) {
            state.cartTotal = state.carts.reduce((acc, curr) => acc + curr.price, 0);
        }
    }
})

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;