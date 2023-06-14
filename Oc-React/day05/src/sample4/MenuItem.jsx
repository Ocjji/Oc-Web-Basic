import React from 'react';

const MenuItem = ({ item, onShow }) => {
    const { id, name, category, isClass } = item
    return (
        <li onClick={() => onShow(name)} className={isClass ? "on" : ""}> {category} </li>
    );
};

export default MenuItem;