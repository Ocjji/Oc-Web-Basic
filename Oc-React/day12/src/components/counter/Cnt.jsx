import React, { useContext } from 'react';
import { CntContext } from "../../contexts/CntContext";

const Cnt = () => {
    const { cnt, increment, decrement } = useContext(CntContext);
    return (
        <div>
            <h2>숫자 UI : {cnt}</h2>
            <p>
                <button onClick={() => increment()}>증가(전달값x)</button>
                <button onClick={() => decrement()}>감소(전달값x)</button>
                <button onClick={() => increment(50)}>50 증가</button>
                <button onClick={() => increment(100)}>100 증가</button>
                <button onClick={() => decrement(10)}>10 감소</button>
                <button onClick={() => decrement(50)}>50 감소</button>
            </p>
        </div>
    );
};

export default Cnt;