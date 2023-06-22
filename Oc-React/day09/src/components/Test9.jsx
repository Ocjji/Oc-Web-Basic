import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

const Test9 = memo(() => {
    const [num, setNum] = useState(1);
    const [isColor, setIsColor] = useState(false);

    // 사용자 정의 함수
    const showFunc = (x) => {
        for (let i = 0; i < 100000000; i++) { }
        return x * 2;
    };
    const onNum = useMemo(() => {
        return showFunc(num)
    }, [num]);
    const changeColor = useMemo(() => {
        return {
            backgroundColor: isColor ? "black" : "yellow",
            color: isColor ? "yellow" : "black"
        }
    }, [isColor]);

    useEffect(() => {

    }, [changeColor]);

    const changeInput = useCallback((e) => {
        setNum(Number(e.target.value));
    }, [isColor]);

    const onColor = useCallback((e) => {
        setIsColor(!isColor);
    }, [isColor]);

    return (
        <>
            <div>
                <input type="number" value={num} onChange={changeInput} />
                <hr />
                <div>
                    <button onClick={onColor}>배경색 변경</button>
                    <h2 style={{ padding: 20, margin: 30, border: "1px solid #000", textAlign: "center", ...changeColor }}>
                        memo, useCallback, useEffect, useMemo : {onNum}
                    </h2>
                </div>
            </div >
        </>
    );
});

export default Test9;