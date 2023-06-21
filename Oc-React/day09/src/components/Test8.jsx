import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

const Test8 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>숫자 : {count}</h2>
            <p>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가 : INCREMENT</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소 : DECREMENT</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>초기화 : RESET</button>
            </p>
        </div>
    );
};

export default Test8;


/* 
const [state, dispatch] = useReducer(reducer, initialArg, init);

useState의 대체 함수입니다. (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환합니다. 

const [state, dispatch] = useReducer(reducer, initialState);
state : 상태데이터 ( 사용자 정의 이름 )
dispatch : 액션을 발생시키는 함수 ( 액션 전달자 )
reducer : 사용자 정의 함수 - 상태분리 함수 ( 상태 업데이트 로직 함수 )
initialState : 초기값

함수 => (state, action) 필수

dispatch({type: '액션명'})
dispatch({type: '필수'})

dispatch({type: '액션명, 별명, 별칭, 사용자정의'}) : 한글, 영문 가능
주로 영문 대문자로 사용하여 구분한다.

dispatch({type: '필수', 키1: 값, 키2: 값})
action.필수 , action.키1, action.키2 - 찾아가는 방법

******************* 문법 *******************
const initialState = 초기값;

const 사용자정의함수명 = (state, action) => {
  switch (action.type) {
    case '별칭1':
      return {count: state.count + 1};
    case '별칭2':
      return {count: state.count - 1};

    ...

    default:
      return state;
  }
}

컴포넌트명 안에
const [state, dispatch] = useReducer(사용자정의함수, initialState);

태그 이벤트 = {() => dispatch({ type: "액션명" })}

*/