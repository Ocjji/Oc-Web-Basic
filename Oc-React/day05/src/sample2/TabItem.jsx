import React from 'react';

const TabItem = ({ item, onShow }) => {
    const { id, isShow, title } = item;
    return (
        <li className={isShow ? "on" : ""} onClick={() => onShow(id)}>
            {title}
        </li>
    );
};

export default TabItem;