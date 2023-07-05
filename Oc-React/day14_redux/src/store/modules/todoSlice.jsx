import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    text: "",
    data: [
        { id: 1, text: "점심먹기", isChk: false },
        { id: 2, text: "캔따기", isChk: true },
        { id: 3, text: "수업듣기", isChk: true },
    ]
}
export const todoSlide = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => { },
        delTodo: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            // state.data = state.data.map(item => item.id === action.payload ? { ...item, isChk: !item.isChk } : item);
            const toggle = state.data.find(item => item.id === action.payload);
            if (toggle) {
                toggle.isChk = !toggle.isChk;
            }
        },
        changeInput: (state, action) => { },
    }
})

export const { addTodo, delTodo, toggleTodo, changeInput } = todoSlide.actions;
export default todoSlide.reducer;