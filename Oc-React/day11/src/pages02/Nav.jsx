import { BrowserRouter,Route, Routes,Link  } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
          <ul>
            <li><Link to="/"> 홈</Link></li>
            <li><Link to="/about"> 자기소개 </Link></li>
            <li><Link to="/ceo"> ceo </Link></li>
          </ul>
          </nav>
        </div>
    );
};

export default Nav;