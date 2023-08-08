import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    displayName: "",
    uid: "",
    accessToken: "",
    isLoading: false
}


export const joinDubot = createAsyncThunk(
    'dubot/joinDubot',
    async (obj) => {
        const res = await axios.post(`http://localhost:3000/mall/join`, obj);
        return res.data
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser(state, action) {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
            state.accessToken = action.payload.accessToken;
            state.isLoading = true;
        },
        clearLogin(state, action) {
            state.displayName = "";
            state.uid = "";
            state.accessToken = "";
            state.isLoading = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(joinDubot.fulfilled, (state, action) => {
                console.log(action.payload);
            })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer