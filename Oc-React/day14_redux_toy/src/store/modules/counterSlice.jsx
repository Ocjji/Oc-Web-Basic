import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0 };

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        onUp: (state) => {
            state.counter += 1;
        },
        onDown: (state) => {
            state.counter -= 1;
        },
    }
})

export const { onUp, onDown } = counterSlice.actions;
export default counterSlice.reducer;