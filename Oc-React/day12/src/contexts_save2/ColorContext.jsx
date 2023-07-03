import React, { createContext, useContext, useMemo, useState } from 'react';

// 관리자 생성
const ColorContext = createContext();
// 사용자 정의 훅처럼 함수 선언
export const useColor = () => useContext(ColorContext);

const ColorProvider = (props) => {
    // 모든 state , function
    const [color, setColor] = useState("orange");
    const onRed = () => setColor("red");
    const onGreen = () => setColor("green");
    const onBlue = () => setColor("blue");
    const onYellow = () => setColor("yellow");

    const value = useMemo(() => ({ color, onRed, onGreen, onBlue, onYellow }), [color, onRed, onGreen, onBlue, onYellow])

    return (
        <ColorContext.Provider value={value}>
            {/* 컴포넌트 안에 컬러 디자인 */}
            {/* <Color /> */}
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;