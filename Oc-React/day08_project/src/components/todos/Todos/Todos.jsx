import { useRef, useState } from 'react';
import styles from './Todos.module.scss';
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";



const Todos = () => {
    const no = useRef(1)
    const [data, setData] = useState([])


    //추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text,
                isChk: false
            }
        ])

    }

    //삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    //변경, 수정 
    const onChk = (id) => {
        setData(data.map(item => item.id === id ? { ...item, isChk: !item.isChk } : item))
    }

    return (
        <div className={styles.Todos}>
            <h1>할일만들기</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onChk={onChk} />
        </div>
    );
};

export default Todos;