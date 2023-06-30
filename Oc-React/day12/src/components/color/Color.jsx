import React, { useContext } from 'react';
import { ColorContext } from "../../contexts/colorContext";

const Color = () => {

    const { color, onRed, onGreen, onBlue, onYellow } = useContext(ColorContext);
    return (
        <div>
            <h2 style={{ color: color }}>디자인 담당 색상 : {color}</h2>
            <p>
                <button onClick={onRed}>RED</button>
                <button onClick={onGreen}>GREEN</button>
                <button onClick={onBlue}>BLUE</button>
                <button onClick={onYellow}>YELLOW</button>
            </p>
        </div>
    );
};

export default Color;