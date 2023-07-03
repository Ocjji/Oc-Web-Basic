import React, { useContext } from 'react';
import './TodoForm.css';
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
    const { text, onAdd, changeInput } = useContext(TodoContext);
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return
        onAdd(text);
    }
    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} />
        </form>
    );
};

export default TodoForm;