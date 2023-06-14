import React from 'react';

const DrInfoMenuItem = ({ item, onSelectInfo }) => {
    const { infoID, title, isShow } = item;
    return (
        <li className={isShow ? "on" : ""} onClick={() => onSelectInfo(infoID)}>
            {title}
        </li>
    );
};

export default DrInfoMenuItem;