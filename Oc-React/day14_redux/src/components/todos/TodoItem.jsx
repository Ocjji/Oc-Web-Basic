import React from 'react';
import { useDispatch } from "react-redux";
import { delTodo, toggleTodo } from "../../store/modules/todoSlice";

const TodoItem = ({ item }) => {
    const { id, text, isChk } = item;
    const dispatch = useDispatch();
    return (
        <li style={{ color: isChk ? "tomato" : "#000" }}>
            <input type="checkbox" checked={isChk} onChange={() => dispatch(toggleTodo(id))} />
            {text}
            <button onClick={() => dispatch(delTodo(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;