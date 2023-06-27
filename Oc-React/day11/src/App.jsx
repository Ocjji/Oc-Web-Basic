import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./assets/css/reset.css";
import Home from "./pages02/Home";
import About from "./pages02/About";
import Ceo from "./pages02/Ceo";
import Layout from "./pages02/Layout";
import CeoLayout from "./pages02/CeoLayout";
import CeoName from "./pages02/CeoName";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="ceo" element={<CeoLayout />}>
              <Route index element={<Ceo />} />
              <Route path=":name" element={<CeoName />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;