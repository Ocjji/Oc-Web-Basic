import React, { useRef } from 'react';

const Test11 = () => {
    const idRef = useRef(null);
    const pwRef = useRef();
    const onShow = () => {
        const data = {
            id: idRef.current.value,
            pw: pwRef.current.value
        }
        console.log(data);
        idRef.current.value = '';
        pwRef.current.value = '';
        idRef.current.focus();
    }
    return (
        <div>
            {/* 수업용 : 좋은 예시는 아니다. */}
            <input type="text" ref={idRef} />
            <input type="text" ref={pwRef} />
            <button onClick={onShow}>확인</button>
        </div>
    );
};

export default Test11;