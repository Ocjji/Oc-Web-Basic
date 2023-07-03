import React from 'react';
import './Todos.css';
import '../assets/css/reset.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => {
    return (
        <div className="Todos">
            <h1>일정 관리하기</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default Todos;