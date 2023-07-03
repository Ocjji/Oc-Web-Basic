import React, { useContext } from 'react';
import { useChangeColor } from "../../contexts/ChangeColorContext";

const ChangeColor = () => {
    const { color, onColor } = useChangeColor();
    return (
        <div>
            <h2 style={{ color: color }}>여러개의 색 UI : {color}</h2>
            <p>
                <button onClick={() => onColor('red')}>RED</button>
                <button onClick={() => onColor('green')}>GREEN</button>
                <button onClick={() => onColor('blue')}>BLUE</button>
                <button onClick={() => onColor('yellow')}>YELLOW</button>
            </p>
        </div>
    );
};

export default ChangeColor;