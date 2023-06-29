import React from 'react';
import { Outlet, Route, Routes } from "react-router-dom";
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
const Layout = () => {
    return (
        <div id="wrap">
            <Routes>
                <Route path="/" element={<MainHeader onBoldMenu={1} />} />
                <Route path="/info" element={<MainHeader blue={"blue"} onBoldMenu={2} />} />
                <Route path="/electronicList" element={<MainHeader blue={"blue"} onBoldMenu={3} />} />
                <Route path="/noticeList" element={<MainHeader blue={"blue"} onBoldMenu={4} />} />
            </Routes>

            <Outlet />
            <MainFooter />
        </div>
    );
};

export default Layout;