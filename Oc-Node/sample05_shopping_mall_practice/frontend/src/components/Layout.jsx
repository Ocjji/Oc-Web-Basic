import Footer from './Footer'
import Header from './Header'
import { Outlet }  from 'react-router-dom'

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