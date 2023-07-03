import React, { createContext, useReducer } from 'react';

const initialState = { isChk: false };
const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case "TRUE":
            return {
                ...state,
                isChk: true
            }
        case "FALSE":
            return {
                ...state,
                isChk: false
            }
        case "TOGGLE":
            return {
                ...state,
                isChk: !state.isChk
            }
        default:
            return state
    }
}

export const PlayContext = createContext();
const PlayProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isChk } = state;
    return (
        <PlayContext.Provider value={{ isChk, dispatch }}>
            {props.children}
        </PlayContext.Provider>
    );
};

export default PlayProvider;