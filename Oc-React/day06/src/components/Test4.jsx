import React, { useState } from 'react';
import Test4Sub from "./Test4Sub";

const Test4 = () => {
    const [isShow, setIsShow] = useState(false);
    const onShow = () => {
        setIsShow(!isShow);
    }
    return (
        <div>
            <p>
                <button onClick={onShow}>보이기 / 숨기기</button>
            </p>
            <hr />
            {isShow && <Test4Sub />}
        </div>
    );
};

export default Test4;