import React, { useEffect, useInsertionEffect, useState } from 'react';
import axios from 'axios';

const Test9 = () => {
    const [data, setData] = useState([]);

    /* useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => setData(json))
    }, []) */

    /* useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data));
    }, []); */

    /* useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await res.json();
            setData(json);
        }
        getData();
    }, []); */

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(res.data);
        }
        getData();
    }, []);

    return (
        <div>
            <ul>
                {
                    data.map(item => <li key={item.id}> {item.id} / {item.title} </li>)
                }
            </ul>
        </div>
    );
};

export default Test9;