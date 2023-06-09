import React from 'react';

const Test7Ani = ({ani, changeInput2}) => {
    return (
        <div>
            <h3>Test7Ani</h3>
            <label>Animal : </label>
            <input type="text" placeholder='동물 입력' onChange={changeInput2}/>
            <span style={{ marginLeft: 30 }}>{ani}</span>
        </div>
    );
};

export default Test7Ani;