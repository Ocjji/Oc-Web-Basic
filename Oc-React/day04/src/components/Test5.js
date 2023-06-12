import React, { useRef, useState } from 'react';

const Test5 = () => {
    const [data, setData] = useState([]);
    const numberingID = useRef(1)
    // const numberingID = useRef(시작번호)
    const names = '김태리,김고은,최우식,송혜교,전지현,임지연,이도현,김동욱,진기주'.split(',');
    const onAdd = () => {
        // 랜덤 번호 - names 개수만큼 - names 배열
        const ran = Math.floor(Math.random() * names.length);
        setData([
            ...data,
            {
                id: data.length + 1,
                text: names[ran]
            }
        ])
    }

    return (
        <div>
            <h2>고유번호처리</h2>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test5;