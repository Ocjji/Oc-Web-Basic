import { createSlice } from "@reduxjs/toolkit";

let no = 3;
const initialState = {
    data: [
        { id: 1, title: "문의합니다 11111", content: "문의내용 11111", date: "2023-07-09", author: "김김김" },
        { id: 2, title: "문의합니다 22222", content: "문의내용 22222", date: "2023-07-06", author: "박박박" },
    ],
    current: {}
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
        addSort(state, action) {
            state.data.sort(function (a, b) {
                if (a.id > b.id) {
                    return -1;
                }
                if (a.id < b.id) {
                    return 1;
                }
                return 0;
            });
        },
        remove(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        edit(state, action) {
            state.current = action.payload;
        },
        update(state, action) {
            state.data = state.data.map(item => item.id === state.current.id ? action.payload : item);
        }
    }
})

export const { add, addSort, remove, edit, update } = customerSlice.actions;
export default customerSlice.reducer;