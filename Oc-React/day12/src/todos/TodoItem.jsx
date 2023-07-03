import React, { useContext } from 'react';
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ item }) => {
    const { onDel, onToggle } = useContext(TodoContext);
    const { id, text, isChk } = item;
    return (
        <li style={{ color: isChk ? "Yellow" : "#000" }}>
            <input type="checkbox" checked={isChk} onChange={() => onToggle(id)} />
            {text}
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;