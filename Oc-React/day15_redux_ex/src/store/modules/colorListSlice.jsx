import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "",
    colorData: []
}
// { id : , color: , opacity: }
let no = 1; // 시작 id 
export const colorListSlice = createSlice({
    name: "colorList",
    initialState,
    reducers: {
        changeInput: (state, action) => {
            state.text = action.payload;
        },
        addColor: (state, action) => {
            state.colorData = [
                ...state.colorData,
                { id: no++, color: action.payload, opacity: 1 }
            ]
        },
        updateColor: (state, action) => {
            const colorItem = state.colorData.find(item => item.id === action.payload)
            if (colorItem.opacity > 0.2) {
                colorItem.opacity -= 0.1;
            }
        },
        removeColor: (state, action) => {
            state.colorData = state.colorData.filter(item => item.id !== action.payload);
        },
    }
})
export const { changeInput, addColor, updateColor, removeColor } = colorListSlice.actions;
export default colorListSlice.reducer;