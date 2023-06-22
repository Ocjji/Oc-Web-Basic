import React from 'react';
import { useFetch } from "../hooks/useFetch";

const Test17 = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/postss");

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

export default Test17;