import React, { useRef, useState } from 'react';

const Test8step3 = () => {
    const [form, setForm] = useState({ id: '', pw: '', email: '' })
    const idRef = useRef()
    const { id, pw, email } = form

    const changeInput = e => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onReset = () => {
        idRef.current.focus()
        setForm({
            ['id']: "",
            ['pw']: "",
            ['email']: ""
        })
    }

    return (
        <div style={{ margin: 30 }}>
            <h3>같은 성격의 input이 여러개일 경우</h3>
            <p>
                <input type="text" value={id} onChange={changeInput} ref={idRef} name="id" />
                <input type="text" value={pw} onChange={changeInput} name="pw" />
                <input type="text" value={email} onChange={changeInput} name="email" />
                <button onClick={onReset}>RESET</button>
            </p>
            <h4>ID : {id}</h4>
            <h4>PW : {pw}</h4>
            <h4>E-mail : {email}</h4>
        </div>
    );
};

export default Test8step3;