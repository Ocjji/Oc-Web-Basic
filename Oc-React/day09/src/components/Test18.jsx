import React from 'react';
import { useAxios } from "../hooks/useAxios";

const Test18 = () => {
    const { data, loading, error } = useAxios("https://jsonplaceholder.typicode.com/posts");

    return (
        <div>
            <h1> Posts Data List </h1>
            {
                !loading && <h2> -------- LOADING -------- </h2>
            }
            <ul>

                {
                    data.map(item => <li key={item.id}> {item.id} / {item.title} </li>)
                }

            </ul>
            <h3>{error ? error : null}</h3>
        </div>
    );
};

export default Test18;