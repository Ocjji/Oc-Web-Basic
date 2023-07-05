import { createSlice } from "@reduxjs/toolkit";

const initialState = { color: "Orange" };
export const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        onRed: (state, action) => { state.color = "Red" },
        onGreen: (state, action) => { state.color = "Green" },
        onBlue: (state, action) => { state.color = "Blue" },
    }
})
export const { onRed, onBlue, onGreen } = colorSlice.actions;
export default colorSlice.reducer;