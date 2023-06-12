import React, { useState } from 'react';
import '../assets/css/reset.css';
import '../assets/css/Test1.scss';

const dataList = [
    { id: 1, text: "1단계 메세지 출력" },
    { id: 2, text: "2단계 메세지 출력" },
    { id: 3, text: "3단계 메세지 출력" }
]

const Test1 = () => {
    const [data, setData] = useState(dataList);
    const [isOpen, setIsOpen] = useState(true);
    const [step, setStep] = useState(1);

    const onToggle = () => {
        setIsOpen(!isOpen)
    }
    const onNext = () => {
        setStep(step >= 3 ? 3 : step + 1);
    }
    const onPrev = () => {
        setStep(step <= 1 ? 1 : step - 1);
    }
    return (
        <div className='wrap'>
            <button className='close' onClick={onToggle}>
                {isOpen ? "닫기" : "열기"}
            </button>
            {isOpen &&
                <div className="steps">
                    <ul className="num">
                        <li className={step === 1 ? "on" : ""}>1</li>
                        <li className={step === 2 ? "on" : ""}>2</li>
                        <li className={step === 3 ? "on" : ""}>3</li>
                    </ul>
                    <p className="msg">
                        단계 {step} : {data[step - 1].text}
                    </p>
                    <p className="btn">
                        <button onClick={onPrev}>이전</button>
                        <button onClick={onNext}>다음</button>
                    </p>
                </div>}
        </div>
    );
};

export default Test1;