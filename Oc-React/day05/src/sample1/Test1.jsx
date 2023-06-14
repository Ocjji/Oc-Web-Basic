import React, { useState } from 'react';
import './style1.scss';

const Test1 = () => {
    const [show, setShow] = useState(2);
    const onShow = (num) => {
        setShow(num);
    }
    return (
        <div>
            <div className="tabs">
                <ul>
                    <li key={1} onClick={() => onShow(1)} className={show === 1 ? "on" : ""}>제목1</li>
                    <li key={2} onClick={() => onShow(2)} className={show === 2 ? "on" : ""}>제목2</li>
                    <li key={3} onClick={() => onShow(3)} className={show === 3 ? "on" : ""}>제목3</li>
                </ul>

                <div className="con-box">
                    <article className={show === 1 ? "on" : ""}>
                        <h3>타이틀1</h3>
                        <p>설명입니다.설명입니다.001</p>
                    </article>
                </div>
                <div className="con-box">
                    <article className={show === 2 ? "on" : ""}>
                        <h3>타이틀2</h3>
                        <p>설명입니다.설명입니다.002</p>
                    </article>
                </div>
                <div className="con-box">
                    <article className={show === 3 ? "on" : ""}>
                        <h3>타이틀3</h3>
                        <p>설명입니다.설명입니다.003</p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Test1;