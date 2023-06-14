import React from 'react';
import MenuItem from "./MenuItem";

const MenuList = ({ menu, onShow }) => {
    return (
        <ul className="menu">
            {menu.map(item => <MenuItem key={item.id} item={item} onShow={onShow} />)}
        </ul>
    );
};

export default MenuList;