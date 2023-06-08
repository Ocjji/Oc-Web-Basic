import React, { useState } from 'react';

const Test6 = () => {
    const [isShow, setIsShow] = useState(false);

    const onShow = () => {
        setIsShow(true);
    }
    const onHide = () => {
        setIsShow(false);
    }
    const onToggle = () => {
        setIsShow(!isShow);
        // setIsShow(isShow ? false : true);
    }

    const css1 = { width: 100, height: 100, background: "tomato" };
    return (
        <div>
            <p>
                <button onClick={onShow}>보이기</button>
                <button onClick={onHide}>숨기기</button>
                <button onClick={onToggle}>
                    {isShow ? '숨기기' : '보이기'}
                </button>
            </p>
            {/* 방법 1 */}
            {
                // isShow ?
                //     <div style={css1}></div> : null
            }

            {/* 방법 2 */}
            {
                // isShow && <div style={css1}></div>
            }

            {/* 방법 3 */}
            <div style={isShow ? css1 : { display: 'none' }}></div>
        </div>
    );
};

export default Test6;