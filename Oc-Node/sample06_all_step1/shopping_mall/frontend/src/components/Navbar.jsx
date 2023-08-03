import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { carts } = useSelector( state => state.cart )
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">홈</Link> </li>
                <li><Link to="/cart">
                        장바구니 / { carts.length}개 
                    </Link> </li>                
            </ul>
        </nav>
    );
};

export default Navbar;