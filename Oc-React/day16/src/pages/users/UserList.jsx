import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/modules/userSlice";
import UserItem from "./UserItem";

const UserList = () => {
    const { users } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <ul>
            <h2>Users List</h2>
            {
                users.map(item => <UserItem key={item.id} item={item} />)
            }
        </ul>
    );
};

export default UserList;