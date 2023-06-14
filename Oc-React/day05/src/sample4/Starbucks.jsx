import React, { useState } from 'react';
import dataList from '../assets/api/starbucksData';
import './style4.scss';
import MenuList from "./MenuList";
import StarList from "./StarList";

// const menus = ['all', 'coldbrew', 'espresso', 'frappuccino', 'fizzio'];
const menus = [
    { id: 1, name: "all", category: "All", isClass: true },
    { id: 2, name: "coldbrew", category: "Cold Brew", isClass: false },
    { id: 3, name: "espresso", category: "Espresso", isClass: false },
    { id: 4, name: "frappuccino", category: "Frappuccino", isClass: false },
    { id: 5, name: "fizzio", category: "Fizzio", isClass: false }
]

const Starbucks = () => {
    const [data, setData] = useState(dataList);
    const [menu, setMenu] = useState(menus);

    const onShow = (name) => {
        if (name === 'all') {
            setData(dataList);
        } else {
            setData(dataList.filter(item => item.name === name))
        }
        setMenu(menu.map(item => item.name === name ? { ...item, isClass: true } : { ...item, isClass: false }))
    }

    return (
        <div className="starbucks">
            <h1>Starbucks Menu</h1>
            <MenuList menu={menu} onShow={onShow} />
            <StarList data={data} />
        </div>
    );
};

export default Starbucks;