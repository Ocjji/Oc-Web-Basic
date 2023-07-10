import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { carts } = useSelector(state => state.cartReducer);
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/cart">장바구니 / {carts.length} 개</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;