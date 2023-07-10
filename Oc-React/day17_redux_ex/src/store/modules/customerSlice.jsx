import { createSlice } from "@reduxjs/toolkit";

let no = 3;
const initialState = {
    data: [
        { id: 1, title: "문의합니다 11111", content: "문의내용 11111", date: "2023-07-09", author: "김김김" },
        { id: 2, title: "문의합니다 22222", content: "문의내용 22222", date: "2023-07-06", author: "박박박" },
    ],
    user: {}
};

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        add(state, action) {
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth() + 1)).slice(-2);
            let day = ('0' + today.getDate()).slice(-2);
            let dateString = year + '-' + month + '-' + day;

            state.data = [...state.data,
            {
                ...action.payload,
                id: no++,
                date: dateString
            }
            ]
        },
        remove(state, action) {

        },
        edit(state, action) {

        }
    }
})

export const { add } = customerSlice.actions;
export default customerSlice.reducer;