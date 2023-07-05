import React from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => {
    return (
        <div>
            <h1>일정관리</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default Todos;