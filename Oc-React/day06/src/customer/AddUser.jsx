import React, { useRef, useState } from 'react';

const AddUser = ({ onAdd }) => {
    const nameRef = useRef(null);
    const [user, setUser] = useState({
        name: '', addr: ''
    })
    const { name, addr } = user;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !addr) return
        onAdd(user)
        setUser({
            name: '', addr: ''
        })
        nameRef.current.focus();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>고객명단 추가</h2>
            <p>
                <label>이름</label>
                <input type="text" name="name" value={name} onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" name="addr" value={addr} onChange={changeInput} />
            </p>
            <p>
                <button type="submit" >추가</button>
            </p>
        </form>
    );
};

export default AddUser;