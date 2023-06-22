import React, { useEffect, useState } from 'react';
import { useAxios } from "../hooks/useAxios";

const Test19 = () => {
    const [text, setText] = useState('posts');
    const { data, loading, error } = useAxios(`https://jsonplaceholder.typicode.com/${text}`);

    const onText = (menu) => {
        setText(menu);
    }
    return (
        <div>
            <h2>'{text}' DATA LIST</h2>
            {
                !loading && <h2> -------- LOADING -------- </h2>
            }
            <p>
                <button onClick={() => onText('posts')}>posts</button>
                <button onClick={() => onText('albums')}>albums</button>
                <button onClick={() => onText('photos')}>photos</button>
                <button onClick={() => onText('todos')}>todos</button>
            </p>
            {!loading && <h2>Loading ... </h2>}
            <ul>
                {
                    data && loading && data.map(item => <li key={item.id}> {item.id} / {item.title} </li>)
                }
            </ul>
        </div>
    );
};

export default Test19;