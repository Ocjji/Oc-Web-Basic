import { memo } from "react";
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = memo(() => {
    return (
        <div id="wrap" style={{ width: "100%" }}>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
});

export default Layout;