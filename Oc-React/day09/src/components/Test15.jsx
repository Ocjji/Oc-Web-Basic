import React from 'react';
import { useCounter } from "../hooks/useCounter";

const Test15 = () => {
    const { state, onUp, onDown, onReset } = useCounter(10);
    return (
        <div>
            <h1>값 : {state}</h1>
            <p>
                <button onClick={onUp}>증가</button>
                <button onClick={onDown}>감소</button>
                <button onClick={onReset}>초기화</button>
            </p>
        </div>
    );
};

export default Test15;