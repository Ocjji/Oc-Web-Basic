import React, { useState } from 'react';
import Test8Sub from "./Test8Sub";

const Test8 = () => {
    const [view, setView] = useState(true);
    const onView = () => {
        setView(!view);
    }
    return (
        <div>
            <p>
                <button onClick={onView}>보이기 / 숨기기</button>
            </p>
            <hr />
            {view && <Test8Sub />}
        </div>
    );
};

export default Test8;