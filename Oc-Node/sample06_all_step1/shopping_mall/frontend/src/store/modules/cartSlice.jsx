import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    carts:[],
    cartTotal:0
}


export const getDubot  = createAsyncThunk(
    'dubot/getDubot',
    async() => {        
        const res = await axios.get(``)        
        return res.data  
    }
)

export const addDubot  = createAsyncThunk(
    'dubot/addDubot',
    async() => {  
        const res = await axios.post(`` )
        return res.data  
    }
)

export const delDubot  = createAsyncThunk(
    'dubot/delDubot',
    async() => {              
        const res = await axios.delete(``)
        return res.data  
    }
)

const cartSlice  = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addCart( state , aciton ) {              
            state.carts.push( aciton.payload )
        },
        removeCart( state, action ){
            state.carts = state.carts.filter( item => item.id !== action.payload)
        },
        totalCart( state , action ) {
            state.cartTotal = state.carts.reduce((acc, curr) => acc + curr.price , 0)
        }
    },
    extraReducers: (builder) => {      
        builder         
          .addCase(getDubot.fulfilled, (state, action) => {
          
          }) 
          .addCase(addDubot.fulfilled, (state, action) => {
           
          })
          .addCase(delDubot.fulfilled, (state, action) => {
           
          }) 
})

export const {addCart , removeCart, totalCart} = cartSlice.actions
export default cartSlice.reducer