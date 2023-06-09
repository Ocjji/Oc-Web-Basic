import React, { useState } from 'react';

const Test3 = () => {
    const [color, setColor] = useState('orange')
    const [txt, setTxt] = useState('tan')


    const onView = () => {
        setColor(txt)
    }
    const onColor = (e) => {
        const { value } = e.target
        setColor(value)
    }

    return (
        <div>
            <h1 style={{ color: color }}>COLOR : {color}</h1>
            <select onChange={onColor}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
                <option value="yellow">yellow</option>
            </select>
            <button>BTN</button>
        </div>
    );
};

export default Test3;