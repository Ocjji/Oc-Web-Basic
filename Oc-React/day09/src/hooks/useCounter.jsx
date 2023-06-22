import React, { useState } from 'react';

// 상태 , 이벤트 함수
export const useCounter = (initialState = 100) => {
    const [state, setState] = useState(initialState);
    const onUp = () => {
        setState(state + 1);
    }
    const onDown = () => {
        setState(state > 1 ? state - 1 : 1);
    }
    const onReset = () => {
        setState(0);
    }
    return { state, onUp, onDown, onReset };
};

// export default useCounter;

/* 
    use + 명령어 : 훅

    사용자 정의 훅 ( 함수 )
*/