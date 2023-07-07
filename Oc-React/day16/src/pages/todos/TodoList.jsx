import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../store/modules/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todos } = useSelector(state => state.todoReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos())
    }, []);

    return (
        <div>
            {
                todos.map(item => <TodoItem key={item.id} item={item} />)
            }
        </div>
    );
};

export default TodoList;