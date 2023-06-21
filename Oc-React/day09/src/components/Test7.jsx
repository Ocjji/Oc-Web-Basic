import React, { useCallback, useState } from 'react';
import Test7Title from "./Test7Title";
import Test7Count from "./Test7Count";

const Test7 = () => {
    const [age, setAge] = useState(20);
    const [money, setMoney] = useState(20000);
    const [now, setNow] = useState(2);

    const onAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const onMoney = useCallback(() => {
        setMoney(money + 10000);
    }, [money]);
    const onNow = useCallback(() => {
        setNow(now + 1);
    }, [now]);

    return (
        <div>
            <Test7Title />
            <hr />
            <Test7Count text="나이" num={age} />
            <button onClick={onAge}>나이</button>
            <hr />
            <Test7Count text="급여" num={money} />
            <button onClick={onMoney}>급여</button>
            <hr />
            <Test7Count text="기간" num={now} />
            <button onClick={onNow}>기간</button>
        </div>
    );
};

export default Test7;