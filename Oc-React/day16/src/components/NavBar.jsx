import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/user">Users</Link></li>
                <li><Link to="/post">Posts</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;