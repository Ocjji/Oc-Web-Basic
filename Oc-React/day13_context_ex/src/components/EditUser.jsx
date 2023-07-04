import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const EditUser = () => {
    const { data, onEdit } = useUser();
    const { editID } = useParams();
    const [current, setCurrent] = useState({ id: "", text: "", isChk: null });
    const { text } = current;
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(data);
        setCurrent(data.find(item => item.id === Number(editID)));
    }, [editID, data]);

    const changeInput = (e) => {
        const { name, value } = e.target;
        setCurrent({
            ...current,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return
        // onEdit
        onEdit(current);
        navigate('/');
    }

    return (
        <>
            <h2>{editID}번 일정을 수정합니다.</h2>
            <form style={{ padding: '20px 0' }} onSubmit={onSubmit}>
                <label htmlFor="">내용 : </label>
                <input type="text" name="text" value={text} onChange={changeInput} />
                <button type="submit">수정하기</button>
                <b><Link to="/">취소</Link></b>
            </form>
        </>
    );
};

export default EditUser;