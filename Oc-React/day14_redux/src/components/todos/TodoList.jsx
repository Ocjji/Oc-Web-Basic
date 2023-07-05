import React from 'react';
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const { data } = useSelector(state => state.todoR);
    return (
        <ul>
            {
                data.map(item => <TodoItem key={item.id} item={item} />)
            }
        </ul>
    );
};

export default TodoList;