import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Counter.css';
import { onDown, onUp } from "../store/modules/counterSlice";

const Counter = () => {
	const { counter } = useSelector(state => state.counter);
	const { bgColor } = useSelector(state => state.colorPicker);
	const dispatch = useDispatch();
	return (
		<div className="Counter">
			<h1 style={{ color: bgColor }}> 숫자: {counter} </h1>
			<div className="btn-wrapper">
				<button onClick={() => dispatch(onUp())}>+</button>
				<button onClick={() => dispatch(onDown())}>-</button>
			</div>
		</div>
	);
};

export default Counter;
