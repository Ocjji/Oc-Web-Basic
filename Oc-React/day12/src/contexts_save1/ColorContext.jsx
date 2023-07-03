import React, { createContext, useState } from 'react';

// 관리자 생성
export const ColorContext = createContext();

const ColorProvider = (props) => {
    // 모든 state , function
    const [color, setColor] = useState("orange");
    const onRed = () => setColor("red");
    const onGreen = () => setColor("green");
    const onBlue = () => setColor("blue");
    const onYellow = () => setColor("yellow");

    return (
        <ColorContext.Provider value={{ color, onRed, onGreen, onBlue, onYellow }}>
            {/* 컴포넌트 안에 컬러 디자인 */}
            {/* <Color /> */}
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;