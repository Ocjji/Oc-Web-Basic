import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, down, increment, up } from "../../store/modules/counterSlice";

const Counter = () => {
    const { counter } = useSelector(state => state.counterR);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>카운트 : {counter}</h2>
            <p>
                <button onClick={() => dispatch(up())}>증가 : up</button>
                <button onClick={() => dispatch(down())}>감소 : down</button>
                <button onClick={() => dispatch(increment(10))}>10증가 : increment</button>
                <button onClick={() => dispatch(increment(50))}>50증가</button>
                <button onClick={() => dispatch(decrement(10))}>10감소 : decrement</button>
                <button onClick={() => dispatch(decrement(50))}>50감소</button>
            </p>
        </div>
    );
};

export default Counter;