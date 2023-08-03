import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let initialState = {      
    customerData:[],
    isShow: false ,
    current : {}, 
    isMsg: false ,
    msg :'' 
  }


export const getCustomer  = createAsyncThunk(
    'customer/getCustomer',
    async() => {        
        const res = await axios.get(`http://localhost:3000/customer`)
        return res.data  
    }
)

export const addCustomer  = createAsyncThunk(
    'customer/addCustomer',
    async( user ) => {    
        const res = await axios.post(`http://localhost:3000/customer`, user  )      
        return res.data  
    }
)

export const delCustomer  = createAsyncThunk(
    'customer/delCustomer',
    async( id ) => {               
        const res = await axios.delete(`http://localhost:3000/customer/${id}`)
        return res.data  
    }
)


export const putCustomer  = createAsyncThunk(
    'customer/putCustomer',
    async( user ) => {             
        const res = await axios.put(`http://localhost:3000/update/${user.id}`, user);
        return res.data  
 }
)

export const editCustomer  = createAsyncThunk(
    'customer/editCustomer',
    async(id) => { 
        const res = await axios.post(`http://localhost:3000/custom/${id}`);
        return res.data  
 }
)

export const customerSlice = createSlice({
    name:'custo',
    initialState ,
    reducers:{        
        cancel(state,action) {
            state.isShow = false 
            state.msg = '출연진 수정 취소합니다.'
            state.isMsg = true
        } ,
        showMsg( state, action) {
            state.isMsg = false
        }       
    },
    extraReducers: (builder) => {      
         builder         
           .addCase(getCustomer.fulfilled, (state, action) => {
            state.state = 'success'
            state.loading = false      
            state.customerData = action.payload 
           }) 
           .addCase(delCustomer.fulfilled, (state, action) => {
            state.state = '삭제'
            state.loading = false      
            state.customerData = action.payload 
            state.msg = '출연진을 삭제합니다.'
            state.isMsg = true
           })           
           .addCase(addCustomer.fulfilled, (state, action) => {
            state.state = '추가'
            state.loading = false      
            state.customerData = action.payload 
            state.msg = '출연진을 추가합니다.'
            state.isMsg = true
           })           
           .addCase(putCustomer.fulfilled, (state, action) => { 
            state.state = '갱신'
            state.loading = false      
            state.customerData = action.payload 
            state.msg = '출연진을 수정했습니다.'
            state.isMsg = true
           })     
           .addCase(editCustomer.fulfilled, (state, action) => {
            state.state = '갱신'
            state.loading = false      

            state.current = action.payload 
            state.msg = '출연진을 수정합니다.'
            state.isMsg = true
            state.isShow = true
           })                 
               
     }
})
export const { changeInput,cancel, showMsg} = customerSlice.actions
export default customerSlice.reducer