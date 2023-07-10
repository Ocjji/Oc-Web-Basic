import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        { id: 1, title: "게시글 제목 11111", content: "게시글 내용 11111", date: "2023-07-10" },
        { id: 2, title: "게시글 제목 22222", content: "게시글 내용 22222", date: "2023-07-10" },
        { id: 3, title: "게시글 제목 33333", content: "게시글 내용 33333", date: "2023-07-10" },
        { id: 4, title: "게시글 제목 44444", content: "게시글 내용 44444", date: "2023-07-10" },
        { id: 5, title: "게시글 제목 55555", content: "게시글 내용 55555", date: "2023-07-10" }
    ]
};

export const noticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {

    }
})

export const { } = noticeSlice.actions;
export default noticeSlice.reducer;