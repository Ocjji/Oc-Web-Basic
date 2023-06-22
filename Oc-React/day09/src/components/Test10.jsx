import React, { memo, useReducer } from 'react';

// 1. 초기값
const initialState = 'tomato';

// 2. 상태분리
const reducer = (state, action) => {

    switch (action.type) {
        case 'RED':
            return 'RED';
        case 'GREEN':
            return 'GREEN';
        case 'BLUE':
            return 'BLUE';
        case 'YELLOW':
            return 'YELLOW';
        default:
            return state;
    }
};

const Test10 = memo(() => {
    // 3. useReducer
    const [color, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1 style={{ fontSize: 50, color: color }}> useReducer - color : {color}</h1>
            <p>
                <button onClick={() => dispatch({ type: 'RED' })}>red</button>
                <button onClick={() => dispatch({ type: 'GREEN' })}>green</button>
                <button onClick={() => dispatch({ type: 'BLUE' })}>blue</button>
                <button onClick={() => dispatch({ type: 'YELLOW' })}>yellow</button>
            </p>
        </div >
    );
});

export default Test10;