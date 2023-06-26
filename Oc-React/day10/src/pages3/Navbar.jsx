import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import dataMenu from './data';

const Navbar = () => {
    const [isNav, setIsNav] = useState(false);
    const onToggle = () => {
        setIsNav(!isNav);
    }
    return (
        <div className='navbar'>
            <p className='all-menu' onClick={onToggle}>
                <i className='xi-bars'></i>
            </p>
            <nav className={isNav ? "on" : ""}>
                <ul>
                    {
                        dataMenu.map((item, idx) => <li key={idx}><Link to={item.path}>{item.title}</Link></li>)
                    }
                </ul>
                <p className="close" onClick={() => setIsNav(false)}>
                    <i className="xi-close"></i>
                </p>
            </nav>
        </div>
    );
};

export default Navbar;