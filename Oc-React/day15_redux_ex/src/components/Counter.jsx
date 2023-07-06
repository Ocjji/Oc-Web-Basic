import React from 'react';
import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from "../store/modules/counterSlice";

const Counter = () => {
	const { count, color } = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="Counter">
			<h1 style={{ color: color }}> 숫자: {count} </h1>
			<div className="btn-wrapper">
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
		</div>
	);
};

export default Counter;
