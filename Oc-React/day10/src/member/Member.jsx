import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const css = {
    border: "1px solid #000",
    padding: 10,
    margin: 20
}

const Member = ({ item }) => {
    const { id, name, email } = item;
    const navigate = useNavigate();

    const onGo = () => {
        navigate(`/member/${id}`);
    }
    return (
        <div style={css}>
            <p> ID : {id} </p>
            <h3> 이름 : {name}</h3>
            <h3> 이메일 : {email}</h3>
            <p><Link to={`/member/${id}`}> 자세히 보기 + </Link></p>
            <button onClick={onGo}>상세 보기</button>
        </div>
    );
};

export default Member;