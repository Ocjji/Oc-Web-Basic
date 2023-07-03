import React from 'react';
import { Link } from "react-router-dom";

const UserItem = ({ item }) => {
    const { id, text, isChk } = item;
    return (
        <li style={{ color: "tomato", padding: 15, border: '1px solid #dcdcdc', marginBottom: 15 }}>
            <input type="checkbox" checked={isChk} />
            <span>{text}</span>
            <b><Link to="/edit/editID">수정</Link></b>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default UserItem;