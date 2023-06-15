import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(x => {
                return x + 1
            });
            // setCount( y => y + 1 )
            // setCount( 이전값 => 이전값 + 1 )
        }, 1000)
        // 시간이 나오면 꼭 뒷정리 하기
        return () => {
            console.log('뒷정리');
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p> 1초마다 계속 1씩 증가</p>
        </div>
    );
};

export default Test5;