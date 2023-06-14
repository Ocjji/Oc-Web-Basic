import React from 'react';

const MenuItem = ({ item, onShow }) => {
    return (
        <li onClick={() => onShow(item)}> {item} </li>
    );
};

export default MenuItem;