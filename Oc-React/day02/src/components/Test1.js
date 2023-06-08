import React from 'react';

const Test1 = () => {
    // 함수 영역
    const handleClick1 = () => {
        alert(`hello111`);
    }
    const handleClick2 = () => {
        alert(`hello222`);
    }
    const handleClick3 = () => {
        alert(`hello333`);
    }
    const make = (num) => {
        alert(num);
    }
    const make1 = (x, y) => {
        alert(`${x} , ${y}`);
    }

    return (
        <div>
            <p>
                <button onClick={handleClick1}>확인</button>
                <button onClick={handleClick2}>확인</button>
                <button onClick={handleClick3}>확인</button>
            </p>
            <p>
                <button
                    // 이벤트 실행문 작성
                    // 실행문이 간단할때
                    onClick={() => {
                        console.log('hi');
                        console.log('hi');
                        console.log('hi');
                        console.log('hi');
                    }}
                >확인</button>
                <button onClick={() => {
                    // 한줄 이상은 무조건 {} 으로 묶음
                    console.log('hihi');
                    console.log('hihi');
                    console.log('hihi');
                }}>확인</button>
                <button onClick={() => console.log('hello')}>확인</button>
            </p>
            <p>
                {/* 함수() -> 무조건호출됨, () => 함수() 방식으로 막아줌 */}
                <button onClick={() => make(100)}>확인</button>
                <button onClick={() => make1(10, 20)}>확인</button>
                <button>확인</button>
            </p>
        </div>
    );
};

export default Test1;

/*  
    JSX 영역 내에서

    <태그 이벤트 = { 함수명() } />
    React
    함수() -> 무조건 호출 : 값을 반환
    괄호를 붙이지 않는 것을 기본으로 한다

    *****  <태그 이벤트 = {함수명} />  *****
*/