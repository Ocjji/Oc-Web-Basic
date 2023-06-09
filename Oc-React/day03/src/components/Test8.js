import React, { useRef, useState } from 'react';

const Test8 = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [email, setEmail] = useState('')
    const idRef = useRef()
    const changeInput1 = e => {
        const { value } = e.target
        setId(value)
    }
    const changeInput2 = e => {
        const { value } = e.target
        setPw(value)
    }
    const changeInput3 = e => {
        const { value } = e.target
        setEmail(value)
    }
    const onReset = () => {
        setId('')
        setPw('')
        setEmail('')
        idRef.current.focus()
    }


    return (
        <div style={{ margin: 30 }}>
            <h3>같은 성격의 input이 여러개일 경우</h3>
            <p>
                <input type="text" value={id} onChange={changeInput1} ref={idRef}/>
                <input type="text" value={pw} onChange={changeInput2} />
                <input type="text" value={email} onChange={changeInput3} />
                <button onClick={onReset}>RESET</button>
            </p>
            <h4>ID : {id}</h4>
            <h4>PW : {pw}</h4>
            <h4>E-mail : {email}</h4>
        </div>
    );
};

export default Test8;