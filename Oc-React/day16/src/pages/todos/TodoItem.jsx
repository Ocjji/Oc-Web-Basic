import React from 'react';

const TodoItem = ({ item }) => {
    const { id, title } = item;
    return (
        <p>
            {id} / {title}
        </p>
    );
};

export default TodoItem;