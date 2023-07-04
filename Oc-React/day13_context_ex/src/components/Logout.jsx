import React from 'react';
import { useAuth } from "../contexts/AuthContext";

const Logout = () => {
    const { logout, authed, user } = useAuth();
    return (
        <div>
            <h1>로그인 되어있습니다. {authed.toString()}</h1>
            <h3>아이디 : {user.id}</h3>
            <h3>이메일 : {user.email}</h3>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

export default Logout;