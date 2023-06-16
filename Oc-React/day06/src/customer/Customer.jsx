import React, { useEffect, useRef, useState } from 'react';
import './Customer.scss'
import AddUser from "./AddUser";
import ListUser from "./ListUser";
import EditUser from "./EditUser";
import Message from "./Message";

const dataList = [
    { id: 1, name: "조영은", addr: "인천" },
    { id: 2, name: "이현아", addr: "서울" },
    { id: 3, name: "윤상연", addr: "경기" },
    { id: 4, name: "강원철", addr: "충북" },
    { id: 5, name: "김초롱", addr: "강원" }
]


const Customer = () => {
    const [data, setData] = useState(
        () => JSON.parse(localStorage.getItem('data')) || dataList
    );
    const user_no = useRef(data.length + 1);
    const [isAddEditToggle, setAEToggle] = useState(false);
    const [currentUser, setCurrent] = useState({});
    const [msg, setMsg] = useState('테스트');
    const [isMsg, setIsMsg] = useState(false);


    // 로컬 스토리지 관리하기
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data])

    // 데이터 추가
    const onAdd = (user) => {
        setData([
            ...data,
            { ...user, id: user_no.current++ }
        ]);
        setIsMsg(true);
        setMsg('추가했습니다');
    }

    // 데이터 수정
    const onEdit = (selectUser) => {
        setAEToggle(true);
        setCurrent(selectUser);
    }
    const onUpdate = (user) => {
        setAEToggle(false);
        setData(data.map(item => item.id === user.id ? user : item));
    }

    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    return (
        <div className="Customer">
            <Message msg={msg} isMsg={isMsg} setIsMsg={setIsMsg} />
            {
                isAddEditToggle ? <EditUser currentUser={currentUser} onUpdate={onUpdate} setAEToggle={setAEToggle} />
                    :
                    <AddUser onAdd={onAdd} />
            }
            <ListUser data={data} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;