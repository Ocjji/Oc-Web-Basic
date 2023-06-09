import React, { useState } from 'react';

const Test4 = () => {
    const [isChk, setIsChk] = useState(true)
    const onChk = (e) => {
        const { checked } = e.target
        setIsChk(checked)
    }

    return (
        <div>
            <div style={{ fontSize: 30, margin: 30, color: isChk ? 'red' : 'blue', textDecoration: isChk ? 'line-through' : 'none' }}>
                <input type="checkbox" checked={isChk} onChange={onChk}></input>
                오늘은 금요일입니다
            </div>
            <p>
                체크박스 선택
                div : 취소선, 컬러색 변경
                checked : true / false
            </p>
        </div>
    );
};

export default Test4;