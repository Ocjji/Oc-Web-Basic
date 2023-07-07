
import { Link } from "react-router-dom";
import './Header.css'
import Navbar from "./Navbar";


const Header = () => {
    return (
        <header className="header">
            <div className="inner">
                <h1><Link to="/">
                    <img src="https://static.goodwearmall.com/resources/img/site-brand.png" alt="GOODWEAR MALL" />
                </Link></h1>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;