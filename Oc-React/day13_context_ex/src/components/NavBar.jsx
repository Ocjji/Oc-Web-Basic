import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
    const { authed } = useAuth();
    return (
        <nav>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/add">추가</Link></li>
                {
                    authed ? <li><Link to="/logout">로그아웃</Link></li>
                        : <li><Link to="/login">로그인</Link></li>
                }
            </ul>
        </nav>
    );
};

export default NavBar;