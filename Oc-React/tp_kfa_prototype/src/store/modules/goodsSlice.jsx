import { createSlice } from "@reduxjs/toolkit";
import { goodsData } from "../../assets/api/goodsData";
console.log(goodsData);

const initialState = {
    goodsData: goodsData,
    categoryData: [],
    currentPage: 1
};

export const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
    }
})

export const { } = goodsSlice.actions;
export default goodsSlice.reducer;