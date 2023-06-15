import React, { useState } from 'react';
import Test9Sub from "./Test9Sub";

const Test9 = () => {
    const [msg, setMsg] = useState('아무말');
    const [isShow, setIsShow] = useState(false);

    const onMsg1 = () => {
        const result = window.confirm('메세지를 확인하시겠습니까?');
        if (result) {
            setMsg('메세지를 확인합니다.');
            setIsShow(true);
        } else {
            return;
        }
    }
    const onMsg2 = () => {
        const result = window.confirm("확인을 누르지 마세요!!");
        if (result) {
            setMsg("꼭 말을 안 듣더라");
            setIsShow(true);
        } else {
            return;
        }
    }
    return (
        <div>
            <button onClick={onMsg1}>메세지 1</button>
            <button onClick={onMsg2}>메세지 2</button>
            <hr />
            <Test9Sub msg={msg} isShow={isShow} setIsShow={setIsShow} />
        </div>
    );
};

export default Test9;