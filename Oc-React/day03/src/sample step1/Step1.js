import React from 'react';

const Step1 = ({ username, age, addr, tel, changeInput, onNext }) => {
    return (
        <>
            <p>
                <label>이름</label>:
                <input type="text" name="username" value={username} onChange={changeInput} />
            </p>
            <p>
                <label>나이</label>:
                <input type="text" name="age" value={age} onChange={changeInput} />
            </p>
            <p>
                <label>주소</label>:
                <input type="text" name="addr" value={addr} onChange={changeInput} />
            </p>
            <p>
                <label>연락처</label>:
                <input type="text" name="tel" value={tel} onChange={changeInput} />
            </p>
            <p>
                <button onClick={onNext}>다음</button>
            </p>
        </>
    );
};

export default Step1;