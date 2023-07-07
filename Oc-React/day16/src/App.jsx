import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/todos/TodoList";
import "./assets/css/reset.css";
import "./assets/css/common.css";
import Layout from "./components/Layout";
import UserPage from "./pages/users/UserPage";
import UserList from "./pages/users/UserList";
import Post from "./pages/posts/Post";
import Contents from "./components/Contents";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Contents />} />
            <Route path="/post" element={<Post />} />

            <Route path="/user">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<UserPage />} />
              {/* <TodoList /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;