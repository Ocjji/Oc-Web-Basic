import React, { createContext, useState } from 'react';

export const ChangeColorContext = createContext();

const ChangeColorProvider = (props) => {
    const [color, setColor] = useState("skyblue");
    const onColor = (txt) => {
        setColor(txt);
    }
    return (
        <ChangeColorContext.Provider value={{ color, onColor }}>
            {props.children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;