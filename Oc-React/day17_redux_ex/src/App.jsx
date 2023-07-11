import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/reset.css'
import './assets/css/common.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Notice from "./pages/Notice";
import NoticeDetail from "./components/NoticeDetail";
import Customer from "./pages/Customer";
import CustomerAdd from "./components/CustomerAdd";
import CustomerDetail from "./components/CustomerDetail";
import CustomerEdit from "./components/CustomerEdit";


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/project" element={<Project />} />

          <Route path="/notice">
            <Route index element={<Notice />} />
            <Route path=":noticeID" element={<NoticeDetail />} />
          </Route>

          <Route path="/customer">
            <Route index element={<Customer />} />
            <Route path="customeradd" element={<CustomerAdd />} />
            <Route path="customeredit" element={<CustomerEdit />} />
            <Route path=":customerID" element={<CustomerDetail />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
