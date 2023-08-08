import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const navigate = useNavigate();
    const onLoginGo = (e) => {
        e.preventDefault();
        navigate("/login")
    }
    const onJoinGo = (e) => {
        e.preventDefault();
        navigate("/join")
    }
    return (
        <div style={{ width: 500, margin: "50px auto" }}>
            <h2>로그인</h2>
            <form action="">
                <p>
                    <span>아이디</span>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </p>
                {/* <p>
                    <span>이메일</span>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                </p> */}
                <p>
                    <span>비밀번호</span>
                    <input type="password" value={pw} onChange={e => setPw(e.target.value)} />
                </p>
                <p>
                    <button onClick={onLoginGo}>로그인</button>
                    <button onClick={onJoinGo}>회원가입</button>
                </p>
            </form>
        </div>
    );
};

export default Login;