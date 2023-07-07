import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, action) {
            state.cart.push(action.payload);
        },
        removeCart(state, action) {

        }
    }
})

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;