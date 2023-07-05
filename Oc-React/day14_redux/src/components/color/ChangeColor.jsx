import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../store/modules/changeColorSlice";

const ChangeColor = () => {
    const { color } = useSelector(state => state.changeColorR);
    const dispatch = useDispatch();
    return (
        <div>
            <h2 style={{ color: color }}>컬러 변경 : {color}</h2>
            <p>
                <button onClick={() => dispatch(changeColor("Red"))}>Red</button>
                <button onClick={() => dispatch(changeColor("Green"))}>Green</button>
                <button onClick={() => dispatch(changeColor("Blue"))}>Blue</button>
            </p>
        </div>
    );
};

export default ChangeColor;