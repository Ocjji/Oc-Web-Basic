import React, { useContext } from 'react';
import { CountContext } from "../../contexts/CountContext";

const Count = () => {
    const { cnt, onUp, onDown } = useContext(CountContext);
    return (
        <div>
            <h2>UI 디자인 카운트 : {cnt}</h2>
            <p>
                <button onClick={onUp}>증가</button>
                <button onClick={onDown}>감소</button>
            </p>
        </div>
    );
};

export default Count;