import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./assets/css/reset.css";
import "./pages01/style.css";
import Main from "./pages01/Main";
import Products from "./pages01/Products";
import ProductDetail from "./pages01/ProductDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
          </ul>
        </nav>
        {/* 화면에 보여지는 영역 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productID" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;