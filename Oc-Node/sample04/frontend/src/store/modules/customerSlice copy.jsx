import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    text: '아무말',
    todos: []
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
        // const removeid=e.target.id; // e는 삭제 button 객체이다.
        const res = await axios.delete(`http://localhost:3000/todos/${removeid}`);
        return res.data
    }
)
export const postTodos = createAsyncThunk(
    'todos/postTodos',
    async (text) => {
        const res = await axios.post(`http://localhost:3000/todos`, { text });
        return res.data
    }
)
export const putTodos = createAsyncThunk(
    'todos/putTodos',
    async (id) => {
        const res = await axios.put(`http://localhost:3000/todos/${id}`);
        return res.data
    }
)

// 


// https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9

let no = 4
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        toggleTodo(state, action) {
            // state.data = state.data.map( item => item.id === action.payload ? {...item, isChk: !item.isChk} : item )

            const todo = state.data.find(item => item.id === action.payload)
            if (todo) {
                todo.isChk = !todo.isChk
            }
            localStorage.setItem('data', JSON.stringify(state.data))
        },
        changeInput: (state, action) => {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        // let { pending, fulfilled, rejected } = getData;
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.state = 'success'
                state.loading = false
                state.todos = action.payload
            })
            .addCase(delTodos.fulfilled, (state, action) => {
                state.state = 'success'
                state.loading = false
                state.todos = action.payload
            })
            .addCase(postTodos.fulfilled, (state, action) => {
                state.state = 'success'
                state.loading = false
                state.todos = action.payload
            })
            .addCase(putTodos.fulfilled, (state, action) => {
                state.state = 'success'
                state.loading = false
                state.todos = action.payload
            })
    }
})
export const { addTodo, delTodo, toggleTodo, changeInput } = todoSlice.actions
export default todoSlice.reducer


// https://github.com/AlekseiNalisnik/NodeJS/blob/master/server.js