import React, { useEffect } from 'react';

const Test9Sub = ({ msg, isShow, setIsShow }) => {
    // 화면에 그려지고 나서, 3초 후 사라지기
    // useEffect , setTimeout

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShow(false);
        }, 3000)
        return () => {
            clearTimeout(timer);
        }
    }, [isShow])

    return (
        <>
            {
                isShow && <div style={{ margin: 30, padding: 20, border: "1px solid #000", fontSize: 16, }}>
                    <h2>메세지 출력 : {msg}</h2>
                </div>
            }
            <p>
                3초 후 사라지기
            </p>
        </>
    );
};

export default Test9Sub;