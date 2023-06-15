import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test2 = () => {
    const [count, setCount] = useState(1);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const onColor = () => {
        setCount(count + 1);
        ref1.current.style.backgroundColor = 'pink';
        ref2.current.style.backgroundColor = 'hotpink';
    }

    // 화면에 그려진 후 한번만
    useEffect(() => {
        console.log('useEffect');
        ref1.current.style.backgroundColor = 'yellow';
    })

    // 화면에 그려지기 전 한번만
    // useEffect 안될때 useLayoutEffect 사용함
    useLayoutEffect(() => {
        console.log('useLayoutEffect');
        ref2.current.style.backgroundColor = 'tomato';
    })

    return (
        <div>
            <h2>카운트 : {count}</h2>
            <h2 ref={ref1}>useEffect</h2>
            <h2 ref={ref2}>useLayoutEffect</h2>
            <button onClick={onColor}>카운트 + 컬러</button>
        </div>
    );
};

export default Test2;