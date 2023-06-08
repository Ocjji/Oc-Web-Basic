import React, { useState } from 'react';

const Test5 = () => {
    const [bgColor, setBgColor] = useState('pink');
    /* const onBgcolor = () => {
        // 변경 - 함수영역 모든 제어문 사용가능 if 문
        if (bgColor === 'pink') {
            setBgColor('tomato');
        } else {
            setBgColor('pink');
        }
    } */
    const onBgcolor = () => {
        setBgColor(bgColor === 'pink' ? 'tomato' : 'pink');
    }
    return (
        <>
            <p>pink 누르면 tomato 누르면 다시 pink</p>
            <div
                style={{ width: 300, height: 100, fontSize: 40, lineHeight: '100px', padding: 20, border: '1px solid #000', textAlign: 'center', backgroundColor: bgColor }}
                onClick={onBgcolor}
            >pink</div >
        </>
    );
};

export default Test5;