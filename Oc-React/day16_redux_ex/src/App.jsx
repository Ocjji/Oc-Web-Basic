import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/reset.css'
import './assets/css/common.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
