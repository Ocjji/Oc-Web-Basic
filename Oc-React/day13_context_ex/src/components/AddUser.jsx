import React from 'react';
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const { changeInput, text, onAdd } = useUser();
    // 추가 후 목록으로 가기 위해 navi 사용
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        // navi 사용 ( 홈으로 )
        // 추가 부분
        if (!text.trim()) return
        onAdd(text);
        navigate('/');
    }
    return (
        <>
            <h2>일정을 추가합니다.</h2>
            <form style={{ padding: '20px 0' }} onSubmit={onSubmit}>
                <input type="text" value={text} onChange={changeInput} />
                <button type="submit">추가</button>
            </form>
        </>
    );
};

export default AddUser;