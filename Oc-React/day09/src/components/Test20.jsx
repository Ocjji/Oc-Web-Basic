import React from 'react';
import { useCounter } from "../hooks/useCounter";
import { useAxios } from "../hooks/useAxios";

const Test20 = () => {
    const { state: count, onUp, onDown } = useCounter(1);
    const { data } = useAxios(`https://jsonplaceholder.typicode.com/posts/${count}`);
    console.log(data.title);
    return (
        <div>
            <h2> posts Data </h2>
            <p>
                <button onClick={onUp}>증가</button>
                <button onClick={onDown}>감소</button>
            </p>
            <h2> 번호 {count} / {data.title}</h2>
        </div>
    );
};

export default Test20;