import React from 'react';
import { Link } from "react-router-dom";

const UserItem = ({ item }) => {
    const { id, name } = item;
    return (
        <li>
            <Link to={`/user/${id}`}>{id} / {name}</Link>
        </li>
    );
};

export default UserItem;