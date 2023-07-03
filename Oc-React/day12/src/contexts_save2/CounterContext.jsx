import React, { createContext, useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
}

export const CounterContext = createContext();

const CounterProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count } = state;
    return (
        <CounterContext.Provider value={{ count, dispatch }}>
            {props.children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;