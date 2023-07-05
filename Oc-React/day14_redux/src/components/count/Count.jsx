import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { onDown, onReset, onUp } from "../../store/modules/countSlice";

const Count = () => {
    // const cnt = useSelector( 매개변수 => 매개변수.키.변수);
    // const cnt = useSelector(state => state.countR.cnt);
    const { cnt } = useSelector(state => state.countR);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>숫자 : {cnt}</h2>
            <p>
                <button onClick={() => dispatch(onUp())}>증가</button>
                <button onClick={() => dispatch(onDown())}>감소</button>
                <button onClick={() => dispatch(onReset())}>초기화</button>
            </p>
        </div>
    );
};

export default Count;