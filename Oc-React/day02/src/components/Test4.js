import React, { useState } from 'react';

const Test4 = () => {
    const [count, setCount] = useState(1);
    const increCount = () => {
        setCount(count + 1);
    }
    const decreCount = () => {
        setCount(count - 1);
    }
    const onReset = () => {
        setCount(1);
    }
    return (
        <div>
            <h1>숫자 : {count}</h1>
            <p>
                <button onClick={increCount}>증가</button>
                <button onClick={decreCount}>감소</button>
                <button onClick={onReset}>초기화</button>
            </p>
        </div>
    );
};

export default Test4;