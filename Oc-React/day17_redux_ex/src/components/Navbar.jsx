import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/profile">프로필</Link></li>
                <li><Link to="/project">프로젝트</Link></li>
                <li><Link to="/notice">공지사항</Link></li>
                <li><Link to="/customer">고객문의</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;