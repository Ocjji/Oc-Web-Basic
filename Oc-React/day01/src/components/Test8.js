import React from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    return (
        <>
            <Test8Sub 
                name = "홍길동"
                age = {30}
                addr = "인천"
                tel = "010-1111-2222"
                done = {true}
                color = "red"
                bgColor = "yellow"
            />
            <Test8Sub 
                name = "김태리"
                addr = "서울"
                done = {false}
                bgColor = "pink"
            />
            <Test8Sub />
        </>
    );
};

export default Test8;