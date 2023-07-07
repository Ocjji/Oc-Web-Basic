import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk(
    "todos/getTodos", // 폴더명/액션명
    async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return res.data;
    }
)

const initialState = {
    todos: [],
    loading: true,
    state: null
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state, action) => {
                state.state = "loading";
                state.loading = true;
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.state = "성공";
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.state = "실패";
                state.loading = true;
            })
    }
})
// export const { } = todoSlice.actions;
export default todoSlice.reducer;