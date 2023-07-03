import React from 'react';
import UserItem from "./UserItem";
import { useUser } from "../contexts/UserContext";

const UserList = () => {
    const { data } = useUser();
    return (
        <ul>
            {
                data.map(item => <UserItem key={item.id} item={item} />)
            }

        </ul>
    );
};

export default UserList;