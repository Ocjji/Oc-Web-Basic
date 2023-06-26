import React from 'react';
import { useAxios } from '../hooks/useAxios';
import Member from "./Member";
const Main = () => {
    const { data } = useAxios("https://jsonplaceholder.typicode.com/users");
    return (
        <div>
            <h2>멤버인원수 : {data.length} 명</h2>
            {
                data.map(item => <Member key={item.id} item={item} />)
            }
        </div>
    );
};

export default Main;