import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeInput } from "../../store/modules/todoSlice";

const TodoForm = () => {
    const { text } = useSelector(state => state.todoR)
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={e => dispatch(changeInput(e.target.value))} />
        </form>
    );
};

export default TodoForm;