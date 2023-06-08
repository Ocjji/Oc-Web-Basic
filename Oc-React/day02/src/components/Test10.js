import React, { useRef } from 'react';

const Test10 = () => {
    const ref1 = useRef(null);

    const onRef1 = () => {
        ref1.current.style.color = 'pink';
        ref1.current.style.fontSize = '50px';
    }
    return (
        <div>
            <h2 ref={ref1}>문자값 입니다.</h2>
            <button onClick={onRef1}>확인 1</button>
            <button >확인 2</button>
        </div>
    );
};

export default Test10;

/* 
공식문서 내용

useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다
useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.


Ref를 사용해야 할 때

포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
애니메이션을 직접적으로 실행시킬 때.
서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

DOM 참조
const 사용자정의 = useRef(null);
const 사용자정의 = useRef();
< 태그 ref={사용자정의} >

사용자정의.current.xxxx

const 사용자정의 = useRef(숫자); - 값을 유지 => 고유번호
 */