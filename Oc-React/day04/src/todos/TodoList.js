import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({ data, onDel, onChk }) => {
    return (
        <ul className='TodoList'>
            {
                data.map(item => <TodoItem key={item.id} item={item} onDel={onDel} onChk={onChk} />)
            }
        </ul>
    );
};

export default TodoList;