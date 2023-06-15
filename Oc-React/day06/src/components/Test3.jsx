import React, { useEffect, useRef, useState } from 'react';

const Test3 = () => {
    const [text, setText] = useState('');
    const textRef = useRef(null);

    const changeInput = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        console.log('useEffect');
        textRef.current.focus();
    }, [])
    // 화면에 그려지고 나서 딱 한번만 실행!!

    return (
        <div>
            <h2>useEffect 형식 2</h2>
            <input type="text" onChange={changeInput} value={text} ref={textRef} />
        </div>
    );
};

export default Test3;