import React, { useContext } from 'react';
import './TodoList.css';
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
    const { data } = useContext(TodoContext);
    return (
        <ul className="TodoList">
            {
                data.map(item => <TodoItem key={item.id} item={item} />)
            }
        </ul>
    );
};

export default TodoList;