import React from 'react';
import Project from "./Project";
import { Routes, Route, Link } from "react-router-dom";
const Profile = () => {
    return (
        <div>
            <h2> Profile Page </h2>
            <ul>
                <li><Link to="html">html</Link></li>
                <li><Link to="js">js</Link></li>
                <li><Link to="/profile/react">react</Link></li>
                <li><Link to="/profile/nodejs">nodejs</Link></li>
            </ul>
            <Routes>
                <Route path=":name" element={<Project />} />
            </Routes>
        </div>
    );
};
export default Profile;