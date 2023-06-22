import React, { useReducer } from 'react';

const initialState = {
    color: "tan"
}
const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { color: action.fcolor }
        case "CHANGEBG_COLOR":
            return { backgroundColor: action.bgColor, ...initialState }
        default:
            return state;
    }
}
const Test12 = () => {

    const [css, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2 style={css}>컬러 : {css.color}</h2>
            <p>
                <button onClick={() => dispatch({ type: "CHANGE_COLOR", fcolor: "red" })}>red</button>
                <button onClick={() => dispatch({ type: "CHANGE_COLOR", fcolor: "green" })}>green</button>
                <button onClick={() => dispatch({ type: "CHANGE_COLOR", fcolor: "blue" })}>blue</button>
                <button onClick={() => dispatch({ type: "CHANGEBG_COLOR", bgColor: "yellow" })}>BG : yellow</button>
            </p>
        </div>
    );
};

export default Test12;