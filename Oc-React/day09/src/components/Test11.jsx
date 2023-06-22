import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.step;
        case "DECREMENT":
            return state - action.step;
        default:
            return state;
    }
}

const Test11 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>카운트 : {count}</h2>
            <p>
                <button onClick={() => dispatch({ type: "INCREMENT", step: 10 })}>증가 : 10</button>
                <button onClick={() => dispatch({ type: "INCREMENT", step: 50 })}>증가 : 50</button>
                <button onClick={() => dispatch({ type: "DECREMENT", step: 20 })}>감소 : 20</button>
                <button onClick={() => dispatch({ type: "DECREMENT", step: 30 })}>감소 : 30</button>
            </p>
        </div>
    );
};

export default Test11;