// js 사용 가능 - if , switch, push , ... 등
import { createSlice } from "@reduxjs/toolkit";
const initialState = { cnt: 0 };

export const countSlice = createSlice({
    name: "count",
    initialState: initialState,
    reducers: {
        onUp: (state) => {
            state.cnt += 1;
        },
        onDown: (state) => {
            state.cnt -= 1;
        },
        onReset: (state) => {
            state.cnt = 0;
        }
    }
})

export const { onUp, onDown, onReset } = countSlice.actions;
export default countSlice.reducer;