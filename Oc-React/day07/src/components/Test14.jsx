import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

const Test14 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/Ocjji/cb64dd14b9a53d0085434730bf8bb478/raw/555a5fdf89a371b1eb7302e2d448a53130698293/todos1.json')
            .then(res => setData(res.data.todos));
    }, [])

    return (
        <div>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test14;