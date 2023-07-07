import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UserPage = () => {
    const { userId } = useParams();
    const { users } = useSelector(state => state.userReducer);
    const navigate = useNavigate();
    const onGo = () => {
        navigate("/user");
    }
    console.log(users);
    // find
    const user = users.find(item => item.id === Number(userId));
    const { id, name, email } = user;
    return (
        <div>
            <p> ID : {id}</p>
            <p> 이름 : {name}</p>
            <p> 이메일 : {email}</p>
            <button onClick={() => onGo()}> 목록으로 </button>
        </div>
    );
};

export default UserPage;