import React, { useRef, useState } from 'react';
import './Todos.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
    const [data, setData] = useState([
        // { id: 1, text: "커피마시기" },
        // { id: 2, text: "점심먹기" }
    ]);
    const no = useRef(1);
    // 추가
    const onAdd = (text) => {
        setData([...data,
        { id: no.current++, text: text, isChk: false }
        ]);
    }

    // 삭제
    const onDel = (id) => {
        setData(
            data.filter(item => item.id !== id)
        )
    }

    // 변경, 수정
    const onChk = (id) => {
        setData(
            data.map(item => item.id === id ? { ...item, isChk: !item.isChk } : item)
        )
    }

    return (
        <div className='Todos'>
            <h1>Todo List</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onChk={onChk} />
        </div>
    );
};

export default Todos;