import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div id="wrap">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;