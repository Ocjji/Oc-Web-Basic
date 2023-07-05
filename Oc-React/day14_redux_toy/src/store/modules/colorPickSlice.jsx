import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    bgColor: "ORANGE",
    data: [
        { id: 1, bgColor: "RED" },
        { id: 2, bgColor: "GREEN" },
        { id: 3, bgColor: "BLUE" },
        { id: 4, bgColor: "ORANGE" },
        { id: 5, bgColor: "PURPLE" },
        { id: 6, bgColor: "PINK" },
    ]
}
export const colorPickSlice = createSlice({
    name: "colorPicker",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.bgColor = state.data.find(item => item.id === action.payload).bgColor;
            console.log(state.bgColor);
        }
    }
})

export const { changeColor } = colorPickSlice.actions;
export default colorPickSlice.reducer;