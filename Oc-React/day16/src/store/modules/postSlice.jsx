import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const detPosts = createAsyncThunk(
    "posts/postData",
    async () => {
        const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=korea`);
        return res.data.hits;
    }
)

const initialState = {
    text: "apple",
    posts: [],
    loading: true,
    state: null
}