import React, { useState } from 'react';

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const onToggle = (bool) => {
        // value => 기존의 값
        setState(value => typeof (bool) === 'boolean' ? bool : !value);
    }
    return { state, onToggle };
};

// export default useToggle;