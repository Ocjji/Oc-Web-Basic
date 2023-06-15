import React, { useState } from 'react';
import './Customer.scss'
import AddUser from "./AddUser";
import ListUser from "./ListUser";
import EditUser from "./EditUser";

const dataList = [
    { id: 1, name: "조영은", addr: "인천" },
    { id: 2, name: "이현아", addr: "서울" },
    { id: 3, name: "윤상연", addr: "경기" },
    { id: 4, name: "강원철", addr: "충북" },
    { id: 5, name: "김초롱", addr: "강원" }
]

const Customer = () => {
    const [data, setData] = useState(dataList);
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    return (
        <div className="Customer">
            <AddUser />
            {/* <EditUser /> */}
            <ListUser data={data} onDel={onDel} />
        </div>
    );
};

export default Customer;