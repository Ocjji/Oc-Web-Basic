import React, { useEffect, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase";
import { joinDubot } from "../store/modules/userSlice";

const Join = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pwCF, setPwCF] = useState('');

    const dispatch = useDispatch();



    const navigate = useNavigate();
    const onLoginGo = async (e) => {
        e.preventDefault();
        if (!name && !email && !pw && !pwCF) {
            alert("모든 값을 작성해주세요");
            return
        }
        if (pw !== pwCF) {
            alert("비밀번호 / 비밀번호확인 불일치");
            return
        }

        let createUser = await firebase.auth().createUserWithEmailAndPassword(email, pw)
        await createUser.user.updateProfile({
            displayName: name
        })

        let body = {
            email: createUser.user.multiFactor.user.email,
            displayName: createUser.user.multiFactor.user.displayName,
            uid: createUser.user.multiFactor.user.uid,
        };

        // useEffect(() => {
        setTimeout(() => {
            dispatch(joinDubot(body));
        }, 200)
        // }, [])

        navigate("/login")
    }
    const onJoinGo = (e) => {
        e.preventDefault();
        navigate("/login")
    }
    return (
        <div style={{ width: 500, margin: "50px auto" }}>
            <h2>회원가입</h2>
            <form action="">
                <p>
                    <span>아이디</span>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </p>
                <p>
                    <span>이메일</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </p>
                <p>
                    <span>비밀번호</span>
                    <input type="password" value={pw} onChange={e => setPw(e.target.value)} />
                </p>
                <p>
                    <span>비밀번호확인</span>
                    <input type="password" value={pwCF} onChange={e => setPwCF(e.target.value)} />
                </p>
                <p>
                    <button onClick={onLoginGo}>회원가입</button>
                    <button><Link to="/login">취소</Link></button>
                </p>
            </form>
        </div>
    );
};

export default Join;