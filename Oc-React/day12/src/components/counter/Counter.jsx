import React, { useContext } from 'react';
import { CounterContext } from "../../contexts/CounterContext";

const Counter = () => {
    const { count, dispatch } = useContext(CounterContext);
    return (
        <div>
            <h2>Reducer Count UI : {count}</h2>
            <p>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>증가:INCREMENT</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>감소:DECREMENT</button>
                <button onClick={() => dispatch({ type: "RESET" })}>초기화:RESET</button>
            </p>
        </div>
    );
};

export default Counter;