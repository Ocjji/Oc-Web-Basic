import React, { useRef, useState } from 'react';

const Test9 = () => {
    const [userid, setUserID] = useState('');
    const [userpw, setUserPW] = useState('');
    const idRef = useRef();

    const changeInput1 = (e) => {
        setUserID(e.target.value);
    }
    const changeInput2 = (e) => {
        const { value } = e.target;
        setUserPW(value);
    }
    const onReset = () => {
        setUserID('');
        setUserPW('');
        idRef.current.focus();
    }
    return (
        <div>
            <input type="text" onChange={changeInput1} value={userid} ref={idRef} />
            <input type="text" onChange={changeInput2} value={userpw} />
            <button onClick={onReset}>초기화</button>
            <hr />
            <h3>id : {userid}</h3>
            <h3>pw : {userpw}</h3>
        </div>
    );
};

export default Test9;