import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "",
    // todoData: []
    todoData: localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : []
}
// { id: , text: , isChk: }
let no = 1;
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        changeInput: (state, action) => {
            state.text = action.payload;
        },
        addTodo: (state, action) => {
            const todoInput = {
                id: no++,
                text: action.payload,
                isChk: false
            }
            state.todoData = [
                ...state.todoData,
                todoInput
            ]
            localStorage.setItem("todoData", JSON.stringify(state.todoData));
        },
        delTodo: (state, action) => {
            state.todoData = state.todoData.filter(item => item.id !== action.payload);
            localStorage.setItem("todoData", JSON.stringify(state.todoData));
        },
        toggleTodo: (state, action) => {
            state.todoData = state.todoData.map(item => item.id === action.payload ? { ...item, isChk: !item.isChk } : item);
            localStorage.setItem("todoData", JSON.stringify(state.todoData));
        },
        editTodo: (state, action) => { },
    }
})
export const { changeInput, addTodo, delTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;