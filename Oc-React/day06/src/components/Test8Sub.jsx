import React, { useEffect, useState } from 'react';

const Test8Sub = () => {
    let today = new Date();
    const [date, setDate] = useState(today.toLocaleDateString());
    const [time, setTime] = useState(today.toLocaleTimeString());

    // 선생님 방법
    // const [now, setNow] = useState(new Date());

    useEffect(() => {
        let timer = null;

        timer = setInterval(() => {
            today = new Date();
            setTime(today.toLocaleTimeString());
            console.log('1sec');
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <h2>오늘 날짜 : {date}</h2>
            <h2>현재 시간 : {time}</h2>
        </div>
    );
};

export default Test8Sub;