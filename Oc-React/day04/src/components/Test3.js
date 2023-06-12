import React, { useState } from 'react';
import Test3Sub from './Test3Sub';
const dataList = [
    { id: 1, name: "유재석" },
    { id: 2, name: "강호동" },
    { id: 3, name: "박명수" },
    { id: 4, name: "정준하" }
]
const Test3 = () => {
    const [data, setData] = useState(dataList);

    // 추가
    const onAdd = (name) => {
        setData([
            ...data,
            { id: data.length + 1, name: "정형돈" }
        ])
    }
    // 삭제
    const onDel = (id) => {
        setData(
            data.filter(item => item.id !== id)
        )
    }
    // 수정
    const onMod = (id) => {
        setData(
            data.map(item => item.id === id ? { ...item, name: "바뀌었습니다" } : item)
        )
    }
    return (
        <div>
            <Test3Sub onAdd={onAdd} onDel={onDel} onMod={onMod} />
            <hr />
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test3;