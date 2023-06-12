import React, { useState } from 'react';

const Test4 = () => {
    const [data, setData] = useState([]);
    // { id , text }
    const onAdd = () => {
        const ran = Math.floor(Math.random() * 10000);
        setData([
            ...data,
            {
                id: data.length + 1,
                text: "유재석 " + ran
            }
        ])
    }
    const onDel = () => { }
    const onMod = () => { }
    return (
        <div>
            <p>
                <button onClick={onAdd}>추가</button>
                <button onClick={onDel}>삭제</button>
                <button onClick={onMod}>수정</button>
            </p>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test4;