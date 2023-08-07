import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    text: '아무말',
    data: []
}

export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async () => {
        const res = await axios.get(`http://localhost:3000/todos`)
        return res.data
    }
)


export const delTodos = createAsyncThunk(
    'todos/delTodos',
    async (removeid) => {
        const res = await axios.delete(`http://localhost:3000/todos/${removeid}`);
        // return res.data
        return removeid;
    }
)
export const postTodos = createAsyncThunk(
    'todos/postTodos',
    async (text) => {
        const res = await axios.post(`http://localhost:3000/todos`, text);
        return res.data
    }
)
export const putTodos = createAsyncThunk(
    'todos/putTodos',
    async (obj) => {
        console.log(obj);
        const res = await axios.put(`http://localhost:3000/todos/${obj.id}`, obj);
        return res.data
    }
)

//http://localhost:3000/todos
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        changeInput: (state, action) => {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.data = action.payload
            })
            .addCase(delTodos.fulfilled, (state, { payload: id }) => {
                // .addCase(delTodos.fulfilled, (state, action) => {
                console.log(id);
                // state.data = action.payload;
                state.data = state.data.filter(item => item.id !== id);
            })
            .addCase(postTodos.fulfilled, (state, action) => {
                console.log(action.payload);
                // state.data = action.payload;
            })
            .addCase(putTodos.fulfilled, (state, action) => {
                console.log(action.payload);

                // state.data = action.payload;
            })
    }

})
export const { changeInput } = todoSlice.actions
export default todoSlice.reducer