import React, { useEffect, useState } from 'react';

const Test7 = () => {
    const [count, setCount] = useState(0);
    const [isCount, setIsCount] = useState(true);

    useEffect(() => {
        let timer = null;

        if (isCount) {
            timer = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isCount]);

    const onToggle = () => {
        setIsCount(!isCount);
    };

    const onReset = () => {
        setIsCount(false);
        setCount(0);
    };

    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={onToggle}>시작 / 일시정지</button>
                <br />
                <button onClick={onReset}>초기화 중지</button>
            </p>
        </div>
    );
};

export default Test7;