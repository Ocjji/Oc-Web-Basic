import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";

const css = {
    border: "2px solid tomato",
    padding: 10,
    margin: 20
}

const MemberDetail = () => {
    const { memberID } = useParams();
    const navigate = useNavigate();
    const { data: memberInfo } = useAxios(`https://jsonplaceholder.typicode.com/users/${memberID}`);
    const { name, email, phone, website } = memberInfo;

    const onGoHome = () => {
        navigate("/");
        // navigate(-1); 이전 한 단계 -1, -2 , ...
    }
    return (
        <div style={css}>
            <h2>멤버 페이지 : {memberID}</h2>
            <h4>이름 : {name}</h4>
            <ul>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{website}</li>
            </ul>
            <button onClick={onGoHome}>첫 페이지</button>
        </div>
    );
};

export default MemberDetail;