import React, { useState } from 'react';
import Test3Sub from "./Test3Sub";

const Test3 = () => {
    const [color, setColor] = useState('');
    const [food, setFood] = useState('');

    const onColor = (e) => {
        setColor(e.target.value);
    }
    const onFood = (e) => {
        setFood(e.target.value);
    }
    const changeInput = (e) => {
        const { value } = e.target;
        setColor(value);
    }

    return (
        <div style={{ margin: 30 }}>
            <h2>좋아하는 색</h2>
            <div>
                <input type="text" onChange={changeInput} value={color} />
                <p> pink, skyblue, tomato, lime</p>
            </div>
            <hr />
            <div>
                <p>
                    <input type="radio" name="food" value="갈비" onChange={onFood} />
                    <label>갈비</label>
                </p>
                <p>
                    <input type="radio" name="food" value="라면" onChange={onFood} />
                    <label>라면</label>
                </p>
                <p>
                    <input type="radio" name="food" value="마라탕" onChange={onFood} />
                    <label>마라탕</label>
                </p>
                <p>
                    <input type="radio" name="food" value="짜장면" onChange={onFood} />
                    <label>짜장면</label>
                </p>
            </div>
            <Test3Sub color={color} food={food} />
        </div>
    );
};

export default Test3;