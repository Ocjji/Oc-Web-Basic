import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/cart">장바구니 / xx 개</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;