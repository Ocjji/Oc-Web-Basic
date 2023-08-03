import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState  = { 
    text:'아무말' ,
    data :[]
}

export const getTodos  = createAsyncThunk(
    'todos/getTodos',
    async() => {        
        const res = await axios.get(`http://localhost:3000/todos`)
        return res.data  
    }
)


export const delTodos  = createAsyncThunk(
    'todos/delTodos',
    async( removeid) => {               
        const res = await axios.delete(`http://localhost:3000/todos/${removeid}`);
        return res.data  
 }
)
export const postTodos  = createAsyncThunk(
    'todos/postTodos',
    async(text) => { 
        const res = await axios.post(`http://localhost:3000/todos`, {text});
        return res.data  
 }
)
export const putTodos  = createAsyncThunk(
    'todos/putTodos',
    async(id) => { 
        const res = await axios.put(`http://localhost:3000/todos/${id}`);
        return res.data  
 }
)



let no = 4  
//http://localhost:3000/todos
export const todoSlice  = createSlice({
    name:'todo',
    initialState,
    reducers:{
        changeInput :( state , action ) => {
            state.text = action.payload
        }  
    },
    extraReducers:(builder) => {
        builder 
        .addCase( getTodos.fulfilled, (state, action) => {
            state.data  = action.payload
        })
        .addCase( delTodos.fulfilled, (state, action) => {
            state.data  = action.payload
        })
        .addCase( postTodos.fulfilled, (state, action) => {
            state.data  = action.payload
        })
        .addCase( putTodos.fulfilled, (state, action) => {
            state.data  = action.payload
        })
    }

})
export const {  changeInput }  = todoSlice.actions
export default todoSlice.reducer