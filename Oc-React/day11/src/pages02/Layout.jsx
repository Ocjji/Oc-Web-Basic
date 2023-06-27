import { Link, Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => {
    return (
        <div style={{ border: '2px solid #000' }}>
            <Nav />

            <Outlet />
        </div>
    );
};

export default Layout;