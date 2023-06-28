import React from 'react';
import { Outlet } from "react-router-dom";
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
const Layout = () => {
    return (
        <div id="wrap">
            <MainHeader />
            <Outlet />
            <MainFooter />
        </div>
    );
};

export default Layout;