import React from 'react';

const Test3Sub = ({ onAdd, onDel, onMod }) => {
    return (
        <div>
            <button onClick={() => onAdd('하동훈')}>추가</button>
            <button onClick={() => onDel(1)}>삭제</button>
            <button onClick={() => onMod(2)}>수정</button>
        </div>
    );
};

export default Test3Sub;