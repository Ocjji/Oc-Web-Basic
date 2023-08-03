import { configureStore } from '@reduxjs/toolkit'
import  customerReducer from './modules/customerSlice'

export const store = configureStore({
    reducer : {    
        customerR : customerReducer
    }
})