import React, { useEffect, useState } from 'react';

const EditUser = ({ currentUser, onUpdate, setAEToggle }) => {
    const [user, setUser] = useState(currentUser);
    const { name, addr } = user;

    // currentUser가 바뀔 때마다
    useEffect(() => {
        setUser(currentUser);
    }, [currentUser])

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
        onUpdate(user);
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>고객명단 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" name="name" value={name} onChange={changeInput} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" name="addr" value={addr} onChange={changeInput} />
            </p>
            <p>
                <button type="submit">수정</button>
                <button onClick={() => setAEToggle(false)}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;