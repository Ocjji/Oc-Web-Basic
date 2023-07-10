import Navbar from "./Navbar";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="inner">
                <h1><Link to="/"><img src="https://didierdubot.co.kr/morenvyimg/top_logo.svg" alt="" /></Link></h1>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;