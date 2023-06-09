import React, { useState } from 'react';

const Name = () => {
    const [text, setText] = useState('')
    const changeInput = e => {
        const { value } = e.target
        setText(value)
    }
    return (
        <div>
            <h3>Name 컴포넌트</h3>
            <label>Name : </label>
            <input type='text' value={text} onChange={changeInput} />
            <span style={{ marginLeft: 20 }}>{text}</span>
        </div>
    );
};
const Animal = ({ ani, changeInput }) => {
    return (
        <div>
            <h3>Animal 컴포넌트</h3>
            <label>Animal : </label>
            <input type='text' value={ani} onChange={changeInput} />
            <span style={{ marginLeft: 20 }}>{ani}</span>
        </div>
    );
};
const Display = ({ ani }) => {
    return (
        <div>
            <h3>Display 컴포넌트</h3>
            <label>Display : {ani}</label>
            <input type='text' />
            <span style={{ marginLeft: 20 }}>xxx</span>
        </div>
    );
};
const Test6 = () => {
    const [ani, setAni] = useState('강아지')
    const changeInput = e => {
        const { value } = e.target
        setAni(value)
    }
    return (
        <div>
            <Name />
            <hr />
            <Animal ani={ani} changeInput={changeInput} />
            <hr />
            <Display ani={ani} />
        </div>
    );
};

export default Test6;