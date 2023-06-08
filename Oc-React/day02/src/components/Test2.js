import React from 'react';

const Test2 = () => {
    let num = 0;
    const increment = () => {
        num += 1;
        console.log(num);
    }
    return (
        <div>
            <h2>책 p209:{num}</h2>
            <button onClick={increment}>증가</button>
        </div>
    );
};

export default Test2;

/* 
    React : 
    렌더링 : 화면에 그리기
    렌더링이 될때마다
    리액트 - 내부것들을 기억하지 못한다
    함수, 변수 등등 새로 만든다
    다시 생성하고 초기화한다

    hook : 
    값을 유지, 업데이트, 메모리 낭비 등을 처리함
    use + xxx

    import React, { useState } from 'react';
    const [변수, 변수값을 변경해주는 함수] = useState(0);
    const [num, increment] = useState(초기값);
    const [상태데이터, setter함수] = useState(초기값);
    
    const [count, setCount] = useState(초기값);
    초기값 : 숫자, 문자, 객체, 배열 등
    count = 초기값
    setCount( 수식 or 값 )
    const [count, setCount] = useState(1);
    count = 1 
    setCount(count + 1) -> 1 + 1 => count : 2
    useState : 값이 변경될때, 값이 유동적일때
*/