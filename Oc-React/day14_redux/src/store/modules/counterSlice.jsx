import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0 };

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        up: (state) => {
            state.counter += 1;
        },
        down: (state) => {
            state.counter -= 1;
        },
        increment: (state, action) => {
            state.counter += action.payload;
        },
        decrement: (state, action) => {
            state.counter -= action.payload;
        }
    }
})

export const { up, down, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;