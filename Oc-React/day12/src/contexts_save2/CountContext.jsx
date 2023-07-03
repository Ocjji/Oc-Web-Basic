import React, { createContext, useState } from 'react';

// 관리자 생성
export const CountContext = createContext();

const CountProvider = (props) => {
    const [cnt, setCnt] = useState(1);
    const onUp = () => setCnt(cnt + 1);
    const onDown = () => setCnt(cnt - 1);
    return (
        <CountContext.Provider value={{ cnt, onUp, onDown }}>
            {/* 디자인 Count */}
            {props.children}
        </CountContext.Provider>
    );
};

export default CountProvider;