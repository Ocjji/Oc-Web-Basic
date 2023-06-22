import React from 'react';
import { useToggle } from "../hooks/useToggle";

const Test16 = () => {
    const { state, onToggle } = useToggle(false);
    return (
        <div>
            <h2> {state ? "True" : "False"} </h2>
            <p>
                <button onClick={onToggle}>Toggle</button>
                <button onClick={() => onToggle(true)}>True</button>
                <button onClick={() => onToggle(false)}>False</button>
            </p>
        </div>
    );
};

export default Test16;