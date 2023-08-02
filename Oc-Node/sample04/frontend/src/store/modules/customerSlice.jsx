import { createSlice } from '@reduxjs/toolkit'

const initialState = {      
    customerData:[
        {id:1, name:'김동욱', addr:'서울'},
        {id:2, name:'진기주', addr:'제주'},
        {id:3, name:'서지혜', addr:'부산'},
        {id:4, name:'이원정', addr:'울산'},
        {id:5, name:'김종수', addr:'경기'},
    ],
    isShow: false ,
    current : {}, 
    isMsg: false ,
    msg :''
}

let no = 6 
export const customerSlice = createSlice({
    name:'custo',
    initialState ,
    reducers:{
        addCustomer( state, action ){
            state.customerData.push({id:no++, ...action.payload })
        },
        editCustomer( state, action ){
            state.current = action.payload
            state.isShow = true 
            state.msg = '출연진을 수정합니다.'
            state.isMsg = true
        },
        delCustomer( state, action ){
            state.customerData = state.customerData.filter( item => item.id !== action.payload )
            state.msg = '출연진을 삭제합니다.'
            state.isMsg = true
        },
        updateCustomer( state, action ){
            state.customerData = state.customerData.map(item => item.id === action.payload.id ? action.payload : item  )
            state.isShow = false 
            state.msg = '출연진을 완료합니다.'
            state.isMsg = true
        },
        cancel(state,action) {
            state.isShow = false 
            state.msg = '출연진 수정 취소합니다.'
            state.isMsg = true
        } ,
        showMsg( state, action) {
            state.isMsg = false
        }       
    }
})
export const {addCustomer,delCustomer,updateCustomer,editCustomer,changeInput,cancel, showMsg} = customerSlice.actions
export default customerSlice.reducer