import React, { useState } from 'react';

const Test3 = () => {
    const [name, setName] = useState('아무개');
    const onName1 = () => {
        setName('이정재');
    }
    const onName2 = () => {
        setName('정우성');
    }
    const onName3 = () => {
        setName('황정민');
    }
    const [age, setAge] = useState('24');


    const [color, setColor] = useState('Red');
    const onColor1 = () => {
        setColor('Red');
    }
    const onColor2 = () => {
        setColor('Green');
    }
    const onColor3 = () => {
        setColor('Blue');
    }
    return (
        <div>
            <h2>이름 : {name}</h2>
            <h2>나이 : {age}</h2>
            <h2 style={{ color: color }}>컬러 : {color}</h2>
            <p>
                <button onClick={onName1}>이정재</button>
                <button onClick={onName2}>정우성</button>
                <button onClick={onName3}>황정민</button>
            </p>
            <p>
                <button onClick={() => { setAge(20) }}>20살</button>
                <button onClick={() => { setAge(30) }}>30살</button>
                <button onClick={() => { setAge(40) }}>40살</button>
            </p>
            <p>
                <button onClick={onColor1}>Red</button>
                <button onClick={onColor2}>Green</button>
                <button onClick={onColor3}>Blue</button>
            </p>
        </div >
    );
};

export default Test3;