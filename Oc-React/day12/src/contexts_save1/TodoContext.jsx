import React, { createContext, useRef, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider = (props) => {
    const [data, setData] = useState([
        { id: 1, text: "점심 먹기", isChk: true },
        { id: 2, text: "친구 만나기", isChk: true },
        { id: 3, text: "운동하기", isChk: false },
        { id: 4, text: "산책하기", isChk: false },
        { id: 5, text: "등산하기", isChk: true }
    ]);
    const [text, setText] = useState("");
    const no = useRef(data.length + 1);

    // 삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    // 토글
    const onToggle = (id) => {
        setData(data.map(item => item.id === id ? { ...item, isChk: !item.isChk } : item))
    }
    // 추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text: text,
                isChk: false
            }
        ])
        setText("");
    }

    // 글자변경
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    }
    return (
        <TodoContext.Provider value={{ data, onDel, onToggle, text, onAdd, changeInput }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;