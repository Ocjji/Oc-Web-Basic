import React, { useState } from 'react';
import Test7Name from './Test7Name';
import Test7Ani from './Test7Ani';
import Test7Display from './Test7Display';

const Test7 = () => {
    const [text, setText] = useState('name')
    const [ani, setAni] = useState('animal')

    const changeInput1 = e=>{
        const {value} =e.target
        setText(value)
    }
    const changeInput2 = e=>{
        const {value} =e.target
        setAni(value)
    }

    return (
        <div>
            <Test7Name text={text} changeInput1={changeInput1}/>
            <hr/>
            <Test7Ani ani={ani} changeInput2={changeInput2}/>
            <hr/>
            <Test7Display text={text} ani={ani}/>
        </div>
    );
};

export default Test7;