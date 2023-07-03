import React, { createContext, useContext, useMemo, useState } from 'react';

const ChangeColorContext = createContext();
export const useChangeColor = () => useContext(ChangeColorContext);

const ChangeColorProvider = (props) => {
    const [color, setColor] = useState("skyblue");
    const onColor = (txt) => {
        setColor(txt);
    }
    const value = useMemo(() => ({ color, onColor }), [color, onColor])
    return (
        <ChangeColorContext.Provider value={value}>
            {props.children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;