import React from 'react';
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <h1>로고</h1>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;