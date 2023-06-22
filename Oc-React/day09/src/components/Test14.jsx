import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    error: null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                data: [],
                loading: true,
                error: null
            }
        case "SUCCESS":
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case "FAILURE":
            return {
                data: [],
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
// https://jsonplaceholder.typicode.com/posts
const Test14 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        // 로딩
        dispatch({ type: "LOADING" });

        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            dispatch({ type: "SUCCESS", data: res.data });
        } catch (e) {
            dispatch({ type: "FAILURE", error: e });
        }

    }

    useEffect(() => {
        getData();
    }, [])

    const { data, loading, error } = state;

    if (loading) return <div> 로딩중 ... </div>;
    if (error) return <div> !!! 에러발생 !!! </div>;
    if (!data) return null;

    return (
        <div>
            {
                data.map(item => <p key={item.id}>{item.id} / {item.title}</p>)
            }
        </div>
    );
};

export default Test14;