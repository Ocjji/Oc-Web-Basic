import { createSlice } from "@reduxjs/toolkit";

const initialState = { color: "Tomato" };
export const changeColorSlice = createSlice({
    name: "changeColor",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload;
        }
    }
})

export const { changeColor } = changeColorSlice.actions;
export default changeColorSlice.reducer;