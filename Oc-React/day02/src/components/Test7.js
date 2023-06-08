import React, { useState } from 'react';
import './Test7.scss'
const Test7 = () => {
    const [isClass, setIsClass] = useState(false);
    const onAdd = () => {
        setIsClass(true);
    }
    const onRemove = () => {
        setIsClass(false);
    }
    const onToggle = () => {
        setIsClass(!isClass);
    }
    return (
        <div className="wrap">
            <p className="on"> 오늘은 목요일입니다. </p>
            <p className="on1"> 오늘은 목요일입니다. </p>
            <p className="test on"> 오늘은 목요일입니다. </p>
            <hr />
            <h2>위 클래스 내용과 동일하게 처리</h2>
            <p className={isClass ? "on" : ''}> 오늘은 목요일입니다. </p>
            <p className={isClass ? "on1" : ''}> 오늘은 목요일입니다. </p>
            <p className={`test ${isClass ? "on" : ''}`}> 오늘은 목요일입니다. </p>
            <div>
                <button onClick={onAdd}>classList.add</button>
                <button onClick={onRemove}>classList.remove</button>
                <button onClick={onToggle}>classList.toggle</button>
            </div>
        </div>
    );
};
export default Test7;